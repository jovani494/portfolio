import React from "react";
import "../../assets/css/CursusList.css";

const CursusList = (props) => {
    return(
        <li key={props.id} className="cursu">
            <div className="cursus_image">
                <img src={props.picture} className={`img_c im_${props.id}`} />
            </div>
            <div className="cursus_info">
                <h5 className="cursus_etab">{props.name}</h5>
                <div className="cursus_description">
                    <p className="cursus_classe">Grade : {props.classe}</p>
                    <p>{props.debut} - {props.fin}</p>
                </div>
            </div>
        </li>
    )
}

export default CursusList;