// import logo from './logo.svg';
// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'
import { getData, setDataRow } from './data';

function App() {

  const columns = [{
    dataField: 'id',
    text: 'Patch ID'
  }, {
    dataField: 'height',
    text: 'Pumpkin height'
  }, {
    dataField: 'circumference',
    text: 'Pumpkin circumference'
  }, {
    dataField: 'weight',
    text: 'Pumpkin weight'
  }];

  return (
    <div className="App">
      <div className='header'><h1>YPD Data Entry</h1></div>
      <div className='container-table'>
        <BootstrapTable 
          keyField='id' 
          data={ getData() } 
          columns={ columns }
          cellEdit={
            cellEditFactory({
              mode: 'click',
              blurToSave: false,
              // onStartEdit: (row, column, rowIndex, columnIndex) => { console.log(row); console.log('Start to edit!!!' + '\nrow: ' + row.data + '\ncolumn: ' + column + '\nindex: '+ columnIndex); },
              // beforeSaveCell: (oldValue, newValue, row, column) => { console.log('Before Saving Cell!!'); },
              afterSaveCell: (oldValue, newValue, row, column) => { 
                setDataRow(row);
                console.log('After Saving Cell!!'); 
                console.log(getData());
              }
            })
          } />
      </div>
    </div>
  );
}


export default App;
