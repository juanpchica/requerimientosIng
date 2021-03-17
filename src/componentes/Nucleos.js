import React, { useState,useEffect } from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export const Nucleos = () => {
    const apiURL = 'http://localhost:8084/apiMoldes/api/nucleos'
    
    const [nucleos,setNucleos] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    
    //Fetch data from server
    const fetchNucleos = async() => {
        const response = await fetch(apiURL);
        const nucleos = await response.json();
        setIsLoading(false);
        setNucleos(nucleos); 
    }

    const onGridReady = ()=>{
        
        fetchNucleos();
    }


    return (
        <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
            <AgGridReact
                rowData={nucleos}
                pagination={true}
                onGridReady={onGridReady}
                floatingFilter={true}
                paginationPageSize={250}
                paginationAutoPageSize={true}
                >
                <AgGridColumn field="codigo" sortable={ true } filter={true } resizable={true} flex={1} ></AgGridColumn>
                <AgGridColumn field="diametroint" sortable={ true } filter={true }  resizable={true} flex={1}></AgGridColumn>
                <AgGridColumn field="diametroext" sortable={ true } filter={true }  resizable={true} flex={1}></AgGridColumn>
                <AgGridColumn field="bi" sortable={ true } filter={true }  resizable={true} flex={1}></AgGridColumn>
                <AgGridColumn field="bisin" sortable={ true } filter={true }  resizable={true} flex={1}></AgGridColumn>
                <AgGridColumn field="lamina" sortable={ true } filter={true }  resizable={true} flex={1}></AgGridColumn>
                <AgGridColumn field="ac" sortable={ true } filter={true }  resizable={true} flex={1}></AgGridColumn>
                <AgGridColumn field="bc" sortable={ true } filter={true }  resizable={true} flex={1}></AgGridColumn>
                <AgGridColumn field="ln2" sortable={ true } filter={true }  resizable={true} flex={1}></AgGridColumn>
                <AgGridColumn field="ai2" sortable={ true } filter={true }  resizable={true} flex={1}></AgGridColumn>
                <AgGridColumn field="ai2SIN" sortable={ true } filter={true }  resizable={true} flex={1}></AgGridColumn>
                <AgGridColumn field="hn" sortable={ true } filter={true }  resizable={true} flex={1}></AgGridColumn>
                <AgGridColumn field="fp" sortable={ true } filter={true }  resizable={true} flex={1}></AgGridColumn>
                <AgGridColumn field="lamxgrupo" sortable={ true } filter={true }  resizable={true} flex={1}></AgGridColumn>
                <AgGridColumn field="peso" sortable={ true } filter={true }  resizable={true} flex={1}></AgGridColumn>
                <AgGridColumn field="diseno" sortable={ true } filter={true }  resizable={true} flex={1}></AgGridColumn>
                <AgGridColumn field="version" sortable={ true } filter={true }  resizable={true} flex={1}></AgGridColumn>
            </AgGridReact>
        </div>
    )
}

