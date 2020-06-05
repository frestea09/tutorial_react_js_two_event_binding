import React from 'react'

const Header = props => {
    function hai(){
        alert('hai')
    }
    return(
        <div className="header">
            <h3>Web Programming {props.namaMahasiswa}</h3>
            <div>
                <table>
                    <tr>
                        <td>Tombol Hai</td>
                        <td>
                            <button onClick={hai}>Hai</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Header