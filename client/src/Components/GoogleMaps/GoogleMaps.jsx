import React from "react";
import {
	Map,
	InfoWindow,
	Marker,
	GoogleApiWrapper,
} from "google-maps-react-17";
import Sucursales from "../GoogleMaps/Sucursales";
import rectangle from "../../assets/redRectangle.jpg";
import "./GoogleMaps.css";

const fakeSucursales = [
	{
		id: 1,
		street: "AV. SABATTINI",
		schedule: "De lunes a viernes de 18 a 24 hs",
	},
	{
		id: 2,
		street: "BUENOS AIRES",
		schedule: "De lunes a viernes de 18 a 24 hs",
	},
	{
		id: 3,
		street: "SEBASTIAN VERA",
		schedule: "De lunes a viernes de 18 a 24 hs",
	},
];

class MapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPlace: {
				name: "",
			},
		};
	}

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
		});
	};

	onInfoWindowClose = () => {
		this.setState({
			selectedPlace: {},
		});
	};

	render() {
		return (
			<div className="all">
				<div>
					<div
						style={{ position: "absolute", zIndex: 9999, marginTop: "34.1rem" }}
					>
						<img src={rectangle} />
					</div>
					<div
						style={{
							position: "absolute",
							zIndex: 9999,
							marginTop: "34.1rem",
							marginLeft: "93.4rem",
						}}
					>
						<img src={rectangle} />
					</div>
				</div>
				<div
					style={{
						display: "flex",
						marginTop: "37%",
						marginLeft: "7%",

						position: "absolute",
						gap: "5rem",
						zIndex: 9999,
					}}
				>
					{fakeSucursales.map((e) => {
						return (
							<Sucursales street={e.street} schedule={e.schedule} id={e.id} />
						);
					})}
				</div>

				<Map google={this.props.google} zoom={14}>
					<Marker onClick={this.onMarkerClick} name={"Current location"} />

					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onInfoWindowClose}
					>
						<div>
							<h1>{this.state.selectedPlace.name}</h1>
						</div>
					</InfoWindow>
				</Map>
			</div>
		);
	}
}
export default GoogleApiWrapper({
	apiKey: "AIzaSyCEMM0nTgaea8LYqdVJApE3afO7wk91EI0",
})(MapContainer);
