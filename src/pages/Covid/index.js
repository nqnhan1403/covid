import React from 'react'
import { Cards, Charts, CountryPicker, Header } from '../../components'
import { fetchData } from '../../api'
import styles from './Covid.module.css'

class Covid extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        setTimeout(() => {
            this.setState({
                data: fetchedData,
                country: country
            })

        }, 500);
    }

    render() {
        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <Header />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country} />
            </div>
        )
    }
}

export default Covid