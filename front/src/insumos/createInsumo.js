import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI ="http://localhost:8000/insumos";

const CompCreateInsumo = () =>{
    return(
        <div>
            <form className="row g-3">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" classNames="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>

            </form>
        </div>
    )
}

export default CompCreateInsumo;