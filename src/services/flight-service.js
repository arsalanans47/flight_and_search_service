const { FlightRepository, AirplaneRepository }= require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {

  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data){
    try {
      if(!compareTime(data.arrivalTime, data.departureTime)){
        throw {error: "Arrival time cannot be less than departure time"};
      }
      const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
      const flight = await this.flightRepository.createFlight({
        ...data, totalSeats: airplane.capacity
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw {error};
    }
  }

  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw {error};
    }
  }

  async getFlight(id) {
    try {
      const flight = await this.flightRepository.getFlight(id);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw {error};
    }
  }

  async updateFlight(flightId, data){
    try {
      console.log("Service: updateFlight called with ID:", flightId, "Data:", data);
      const response = await this.flightRepository.updateFlights(flightId, data);
      return response;
    } catch (error) {
      console.log("ERROR in service layer:", error.error?.message || error.message || error);
      console.log("Full error:", error);
      throw {error};
    }
  }
}

module.exports = FlightService;