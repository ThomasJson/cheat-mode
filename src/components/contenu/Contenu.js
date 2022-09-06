import React, {useContext} from 'react';
import "./contenu.scss";
import { ThemeContext } from '../../context/ThemeContext';


function Contenu(props) {

    const {theme} = useContext(ThemeContext)

    return (
        <div>
            <h1>Lorem ipsum dolor sit amet.</h1>
            {theme}
        </div>
    );
}

export default Contenu;