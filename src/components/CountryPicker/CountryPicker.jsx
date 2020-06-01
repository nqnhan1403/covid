import React, { useState, useEffect } from "react";
import {
    FormControl,
    MenuItem,
    Select,
} from "@material-ui/core";

import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

const CountryPicker = (props) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    const [currentCountry, setCurrentCountry] = useState('Global')

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        };
        fetchAPI();
    }, [setFetchedCountries]);

    var handleCountryChange = country => {        
        setCurrentCountry(country)
        props.handleCountryChange(country)        
    }
    return (
        <FormControl className={styles.formControl}>
            <span className={styles.label}>{currentCountry.toUpperCase()}</span>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value=''
                className={styles.customSelect}
                onChange={(e) => handleCountryChange(e.target.value)}
                label="Country"
            >
                {fetchedCountries.map((country, i) => (
                    <MenuItem key={i} value={country}>
                        {country.toUpperCase()}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CountryPicker;
