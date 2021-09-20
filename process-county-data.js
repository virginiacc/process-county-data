const fs = require( 'fs' );

const initializeData = ( data ) => {
  let rows = data.split( '\n' );
  const header = rows[0].split( ',' );
  rows.splice(0, 1);
  let results = [];
  rows.map( function( row ) {
    let items = row.split( ',' );
    let obj = {};
    items.map( ( content, index ) => {
      obj[header[index]] = content;
    } );
    results.push( obj );
  } );
  return results;
}

const processData = ( counties ) => {
  let countyMap = {};
  counties.forEach( item => {
    let state = item.STNAME;
    let county = item.CTYNAME;
    if ( state === county ) {
      return;
    }
    if ( county === 'Do�a Ana County' ) {
      county = 'Doña Ana';
    }
    let stateArray = countyMap[state] || [];
    stateArray.push(county.split(' County')[0]);
    countyMap[state] = stateArray;
  })
  return countyMap;
}

// "main" code

if ( process.argv[2] == null ) {
  console.log( 'No argument was provided! This script requires a CSV file as its sole argument.' );
} else {
  fs.readFile( process.argv[2], 'utf8' , ( err, data ) => {
    if (err) {
      console.error( err );
      return;
    }
    // process the data
    let counties = initializeData( data );
    let countyMap = processData( counties );
    // write generated to file
    fs.writeFile( 'output/county-map.json', JSON.stringify( countyMap ), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    })

  } );

}
