import React, { useEffect, useState } from "react";
import ItemsTable from "./ItemsTable";


function Table() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch("/api/products").then((respuesta) => {
            return respuesta
                .json()
                .then((info) => {
                    setInfo(info.data);
                })
                .catch((err) => console.log(err));
        });
    }, []);

<<<<<<< HEAD


    return (
    <div className="card shadow mb-4 ">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="80%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>stock</th>
                                <th>Precio</th>
                                {/* <th>Detalle</th> */}
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>stock</th>
                                <th>Precio</th>
                                {/* <th>Detalle</th> */}
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            info.map( ( info , i) => {
                                return <ItemsTable {...info} key={info + i}/>
                            })
                            }

                        </tbody>
                    </table>
=======
    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                  
                    <div className="card shadow mb-4 ">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table
                                    className="table table-bordered"
                                    id="dataTable"
                                    width="100%"
                                    cellSpacing="0"
                                >
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Marca</th>
                                            <th>Modelo</th>
                                            <th>stock</th>
                                            <th>Precio</th>
                                            {/* <th>Detalle</th> */}
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Id</th>
                                            <th>Marca</th>
                                            <th>Modelo</th>
                                            <th>stock</th>
                                            <th>Precio</th>
                                            {/* <th>Detalle</th> */}
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {info.map((info, i) => {
                                            return (
                                                <ItemsTable
                                                    {...info}
                                                    key={info + i}
                                                />
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                
>>>>>>> 4cd8d04efced0084c133bf187b15dc4ffa55afff
                </div>
            </div>
        </React.Fragment>
    );
}

export default Table;
