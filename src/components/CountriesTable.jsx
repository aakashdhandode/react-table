import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const CountriesTable = () => {
    const [search, setSearch] = useState([]);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    const getCountries = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v2/all')
            setCountries(response.data);
            setFilteredCountries(response.data);
        } catch (error) {
            console.log(error);
        }
    };


    const columns = [
        {
            name: "Country Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Country Native Name",
            selector: (row) => row.nativeName,
        },
        {
            name: "Country Capital",
            selector: (row) => row.capital,
        },
        {
            name: "Country Flag",
            selector: (row) => <img width={50} height={50} src={row.flag} />,
        },
        {
            name: "Action",
            cell: (row) => <button className='btn btn-success'>Edit </button>

        },
    ];


    useEffect(() => {
        getCountries();
    }, []);

    useEffect(() => {
        const result = countries.filter(country => {
            return country.name.toLowerCase().match(search.toLowerCase());
        });
        setFilteredCountries(result);
    }, [search]);
    return (
        <>
            <div style={{ padding: "50px" }}>
                <h4 style={{ marginTop: "0%", fontSize: "15px", fontWeight: "bold" }}>CONTRIES TABLE</h4>
            </div>
            <DataTable columns={columns}
                data={filteredCountries}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='1000px'
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                // actions={
                //     <button className='btn'>Export</button>
                // }
                subHeader
                subHeaderComponent={
                    <input type="text"
                        placeholder="search here"
                        className='w-5 form-control'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                }
            />



        </>
    )
}

export default CountriesTable
