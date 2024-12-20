import React, { useState } from 'react';

export default function TransferList() {
    const [col1, setCol1] = useState(['India', 'Sri Lanka', 'Indonesia', 'Nepal', 'Bhutan']);
    const [col3, setCol3] = useState([]);
    const [selectedCol1, setSelectedCol1] = useState([])
    const [selectedCol3, setSelectedCol3] = useState([])

    const handleCheckBoxChange = (selectedCountry, source, setSource) => {
        setSource((previousSource) => {
            if(previousSource.includes(selectedCountry)) { // Removing checkmark
                return previousSource.filter((country) => country !== selectedCountry);
            } else { // Adding checkmark
                return [...previousSource, selectedCountry];
            }
        })
    }

    const moveTo = (source, setSource, target, setTarget, all = false) => {
        if(all) {
            setTarget((prev) => [...prev, ...source]);
            setSource([])
        } else {
            const selectedCountries = source === col1 ? selectedCol1 : selectedCol3;
            setTarget((previousTarget) => [...previousTarget, ...selectedCountries]);
            setSource((previousSource) => previousSource.filter((country) => !selectedCountries.includes(country)));
            if (source === col1) {
                setSelectedCol1([]);
            } else {
                setSelectedCol3([]);
            }
        }
    }

    return (
        <div className='container flex justify-center items-center'>
            <table>
                <thead></thead>
                <tbody>
                    <tr className='flex'>
                        <td className='column flex flex-col justify-center border border-black min-w-24 p-4' id='col1'>
                            {col1.map((country) => (
                                <label key={country}>
                                    <input type='checkbox' value={country}
                                    className='m-4'
                                    onChange={() => handleCheckBoxChange(country, col1, setSelectedCol1)} 
                                    checked={selectedCol1.includes(country)} />
                                    {country}
                                </label>
                            ))}
                        </td>
                        <td className='column px-4 flex flex-col justify-center border border-black min-w-36' id='col2'>
                            <button className='p-2 m-2 border border-black bg-slate-200' id='moveAllToLeft' onClick={() => moveTo(col3, setCol3, col1, setCol1, true)}>All-Left</button>
                            <button className='p-2 m-2 border border-black bg-slate-200' id='moveOneToLeft' onClick={() => moveTo(col3, setCol3, col1, setCol1)}>One-Left</button>
                            <button className='p-2 m-2 border border-black bg-slate-200' id='moveOneToRight' onClick={() => moveTo(col1, setCol1, col3, setCol3)}>One-Right</button>
                            <button className='p-2 m-2 border border-black bg-slate-200' id='moveAllToRight' onClick={() => moveTo(col1, setCol1, col3, setCol3, true)}>All-Right</button>
                        </td>
                        <td className='column flex flex-col justify-center border border-black min-w-36 p-4' id='col3'>
                            {col3.map((country) => (
                                <label key={country}>
                                    <input type='checkbox' value={country}
                                    className='m-4'
                                    onChange={() => handleCheckBoxChange(country, col3, setSelectedCol3)}
                                    checked={selectedCol3.includes(country)} />
                                    {country}
                                </label>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};