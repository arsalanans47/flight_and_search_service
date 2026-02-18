const { where } = require('sequelize');
const {City} = require('../models/index');

class CityRepository {
  async createCity({name}){
    try {
      const city = await City.create({name});
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw {error};
    }
  }


  async deleteCity(cityId){
    try {
      await City.destroy({
        where: {
          id : cityId
        }
      })
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw {error};
    }
  }

  async updateCity(cityId, data) {
    try {
      // the below approach also works but will not return updated object
      //if we are using pg then returning: true can be used, else not


      // const city = await City.update(data, {
      //   where: {
      //     id : cityId
      //   }
      // })

      // for getting updated data in mmysql we can do as below
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw {error};
      
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw {error};
      
    }
  }

}

module.exports = CityRepository;