const {CityService} = require('../services/index');

/* 
  * POST
  * data -> req.body  
*/
const cityservice = new CityService();


// POST -> /city -> req.body
const create = async (req, res) => {
    try {
      const city = await cityservice.createCity(req.body);
      return res.status(201).json({
        data: city,
        success: true,
        message: "Successfully created a city",
        err: {}
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        message: "Not able to create a city",
        err: error
      });
    }
}

// DELETE -> /city/:id
const destroy = async (req, res) => {
    try {
      const response = await cityservice.deleteCity(req.params.id);
      return res.status(200).json({
        data: response,
        success: true,
        message: "Successfully deleted a city",
        err: {}
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        message: "Not able to delete a city",
        err: error
      });
    }
}

// GET -> /city/:id
const get = async (req, res) => {
    try {
      const response = await cityservice.getCity(req.params.id);
      return res.status(200).json({
        data: response, 
        success: true,
        message: "Successfully fetched a city",
        err: {}
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        message: "Not able to fetch a city",
        err: error
      });
    }
}

// PUT -> /city/:id -> req.body
const update = async (req, res) => {
    try {
      const response = await cityservice.updateCity(req.params.id, req.body);
      return res.status(200).json({
        data: response,
        success: true,
        message: "Successfully updated a city",
        err: {}
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        message: "Not able to update a city",
        err: error
      });
    }
}




module.exports = {
    create,
    destroy,
    get,
    update
}