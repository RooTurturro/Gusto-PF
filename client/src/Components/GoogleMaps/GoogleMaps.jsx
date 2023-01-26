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

const fireIcon =
	" https://e7.pngegg.com/pngimages/613/472/png-clipart-gif-emoji-sticker-fire-emoji-orange-sticker-thumbnail.png";

class MapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPlace: {
				name: "",
			},
			userPosition: {
				lat: null,
				lng: null,
			},
		};
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			this.setState({
				userPosition: {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				},
			});
		});
	}

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
		});
	};

	render() {
		return (
			<div className="all">
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginTop: "20rem",
					}}
				>
					<img src={rectangle} alt="rec" />
					{fakeSucursales.map((e) => {
						return (
							<Sucursales street={e.street} schedule={e.schedule} id={e.id} />
						);
					})}
					<img src={rectangle} alt="rec" />
				</div>
				<Map
					google={this.props.google}
					initialCenter={this.state.userPosition}
					zoom={14}
				>
					{this.state.userPosition.lat && (
						<Marker
							onClick={this.onMarkerClick}
							name={"Current location"}
							position={this.state.userPosition}
						/>
					)}
					<Marker
						onClick={this.onMarkerClick}
						name={"Primer local"}
						position={{ lat: -33.119903, lng: -64.351288 }}
						icon={fireIcon}
					/>
					<Marker
						onClick={this.onMarkerClick}
						name={"Segundo local"}
						position={{ lat: -33.136166, lng: -64.353221 }}
						icon={fireIcon}
					/>
					<Marker
						onClick={this.onMarkerClick}
						name={"Tercer local"}
						position={{ lat: -33.119978, lng: -64.367714 }}
						icon={fireIcon}
					/>
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
