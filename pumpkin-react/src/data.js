import rowExpandContext from "react-bootstrap-table-next/lib/src/contexts/row-expand-context";

const data = [{
  id: 0,
  height: '',
  circumference: '',
  weight: '',
  },{
  id: 1,
  height: '',
  circumference: '',
  weight: '',
  }];


export function getData() {
    return data
}

export function getDataRow(id) {
    return data[id]
}

export function setDataRow(row) {
    data[row.id] = row;
}
