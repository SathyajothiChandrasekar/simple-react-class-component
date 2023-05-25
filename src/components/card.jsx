import React from "react"
import profile from '../assets/profile.png'

export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "sathya",
            lastname: "jothi",
            phone: "9876543210",
            email: "saxxxxxxxxx@gmail.com",
            isFavourite: false
        }
    }

    handleFav = () => {
        this.setState(prev => ({
            ...prev, isFavourite: !prev.isFavourite
        }))
    }

    render() {
        let starIcon = this.state.isFavourite ? "🌟" : "➕"

        return (
            <div className="main">
                <article className="card">
                    <img className="card-img" src={profile} alt="" height={350} width={350} />
                    <div className="card-info">
                        <h3 className="card-fav" onClick={this.handleFav}>{starIcon}</h3>
                        <h1 className="card-name">{this.state.firstName}{this.state.lastname}</h1>
                        <p className="card-phone">{this.state.phone}</p>
                        <p className="card-email">{this.state.email}</p>
                    </div>
                </article>
            </div>
        )
    }
}