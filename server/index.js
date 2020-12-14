const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { json } = require("express");

// middleware

app.use(cors());
app.use(express.json()) //req.body

//ROUTES//

//HOSPTIAL//

// create a hospital
app.post("/hospital",async (req,res) => {
    try {
        const 
        { hospital_id,hospital_name,
            hospital_address,hospital_contact_no_1,
            hospital_contact_no_2} = req.body;
        const newHospital = await pool.query(
            "INSERT INTO hospital(hospital_id,hospital_name,hospital_address,hospital_contact_no_1,hospital_contact_no_2) VALUES($1,$2,$3,$4,$5) RETURNING * ",
            [hospital_id,hospital_name,hospital_address,hospital_contact_no_1,hospital_contact_no_2]
        );
        res.json(newHospital.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
});
// get all hospitals
app.get("/hospital",async (req,res)=>{
    try {
        const allHospital = await pool.query(
            "SELECT * FROM hospital"
        );
        res.json(allHospital.rows);
    } catch (error) {
        console.error(error.message)
    }
});
// get a hospital
app.get("/hospital/:hospital_id",async(req,res)=>{
    try {
        const {hospital_id} = req.params;
        const hospital = await
         pool.query("SELECT * FROM hospital WHERE hospital_id = $1", [hospital_id]);

         res.json(hospital.rows[0])
    } catch (error) {
        console.error(error.message);
    }
});
// update a hospital name
app.put("/hospital/:hospital_id/name", async (req,res) => {
    try {
      const {hospital_id} =  req.params;
      const {hospital_name} = req.body;
      const updateHosptial = await pool.query(
        "UPDATE hospital SET hospital_name = $1 WHERE hospital_id = $2",
      [hospital_name,hospital_id]
      );
  
      res.json("Hospital name was updated!");
      
    } catch (error) {
      console.log(error.message)
    }
  });
// update a hospital address
app.put("/hospital/:hospital_id/address", async (req,res) => {
    try {
      const {hospital_id} =  req.params;
      const {hospital_address} = req.body;
      const updateHosptial = await pool.query(
        "UPDATE hospital SET hospital_address = $1 WHERE hospital_id = $2",
      [hospital_address,hospital_id]
      );
  
      res.json("Hospital address was updated!");
      
    } catch (error) {
      console.log(error.message)
    }
  });
// update a hosptial contact no 1
app.put("/hospital/:hospital_id/contact1", async (req,res) => {
    try {
      const {hospital_id} =  req.params;
      const {hospital_contact_no_1} = req.body;
      const updateHosptial = await pool.query(
        "UPDATE hospital SET hospital_contact_no_1 = $1 WHERE hospital_id = $2",
      [hospital_contact_no_1,hospital_id]
      );
  
      res.json("Hospital contact no 1 was updated!");
      
    } catch (error) {
      console.log(error.message)
    }
  });
// update a hospital contact no 2
app.put("/hospital/:hospital_id/contact2", async (req,res) => {
    try {
      const {hospital_id} =  req.params;
      const {hospital_contact_no_2} = req.body;
      const updateHosptial = await pool.query(
        "UPDATE hospital SET hospital_contact_no_2 = $1 WHERE hospital_id = $2",
      [hospital_contact_no_2,hospital_id]
      );
  
      res.json("Hospital contact no 2 was updated!");
      
    } catch (error) {
      console.log(error.message)
    }
  });

// delete a hospital
app.delete("/hospital/:hospital_id", async (req, res) => {
    try {
      const { hospital_id } = req.params;
      const deleteHospital = await pool.query("DELETE FROM hospital WHERE hospital_id = $1", [
        hospital_id
      ]);
      res.json("Hospital was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });


//BLOOD BANK//

// create a bloodbank
app.post("/bloodbank",async (req,res) => {
    try {
        const 
        {  bloodbank_id , bloodbank_building_no ,blood_street_name , bloodbank_contact_no} = req.body;
        const newHospital = await pool.query(
            "INSERT INTO bloodbank(bloodbank_id , bloodbank_building_no ,blood_street_name , bloodbank_contact_no) VALUES($1,$2,$3,$4) RETURNING * ",
            [bloodbank_id , bloodbank_building_no ,blood_street_name , bloodbank_contact_no]
        );
        res.json(newHospital.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
});
// get all bloodbanks
app.get("/bloodbank",async (req,res)=>{
    try {
        const allBloodbank = await pool.query(
            "SELECT * FROM bloodbank"
        );
        res.json(allBloodbank.rows);
    } catch (error) {
        console.error(error.message)
    }
});
// get a bloodbank

app.get("/bloodbank/:bloodbank_id",async(req,res)=>{
    try {
        const {bloodbank_id} = req.params;
        const bloodbank = await
         pool.query("SELECT * FROM bloodbank WHERE bloodbank_id = $1", [bloodbank_id]);

         res.json(bloodbank.rows[0])
    } catch (error) {
        console.error(error.message);
    }
});
// update a bloodbank_building_no
app.put("/bloodbank/:bloodbank_id/building_no", async (req,res) => {
    try {
      const {bloodbank_id} =  req.params;
      const {bloodbank_building_no} = req.body;
      const updateBloodbank= await pool.query(
        "UPDATE bloodbank SET bloodbank_building_no = $1 WHERE bloodbank_id = $2",
      [bloodbank_building_no,bloodbank_id]
      );
  
      res.json("Blood bank building number was updated!");
      
    } catch (error) {
      console.log(error.message)
    }
  });
// updae a bloodbank_street_name
app.put("/bloodbank/:bloodbank_id/street_name", async (req,res) => {
    try {
      const {bloodbank_id} =  req.params;
      const {blood_street_name} = req.body;
      const updateBloodbank= await pool.query(
        "UPDATE bloodbank SET blood_street_name = $1 WHERE bloodbank_id = $2",
      [blood_street_name,bloodbank_id]
      );
  
      res.json("Blood bank street name was updated!");
      
    } catch (error) {
      console.log(error.message)
    }
  });
// update a bloodbank_contact_no
app.put("/bloodbank/:bloodbank_id/contact_no", async (req,res) => {
    try {
      const {bloodbank_id} =  req.params;
      const {bloodbank_contact_no} = req.body;
      const updateBloodbank= await pool.query(
        "UPDATE bloodbank SET bloodbank_contact_no = $1 WHERE bloodbank_id = $2",
      [bloodbank_contact_no,bloodbank_id]
      );
  
      res.json("Blood bank contact number was updated!");
      
    } catch (error) {
      console.log(error.message)
    }
  });
// delete a bloodbank
app.delete("/bloodbank/:bloodbank_id", async (req, res) => {
    try {
      const { bloodbank_id } = req.params;
      const deleteBloodbank = await pool.query("DELETE FROM bloodbank WHERE bloodbank_id = $1", [
        bloodbank_id
      ]);
      res.json("Bloodbank was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

//BLOOD//

// create a blood
app.post("/blood",async (req,res) => {
    try {
        const 
        {  sample_no , blood_grp , blood_type ,
             cost_per_unit} = req.body;
        const newBlood = await pool.query(
            "INSERT INTO blood(sample_no , blood_grp , blood_type ,cost_per_unit) VALUES($1,$2,$3,$4) RETURNING * ",
            [sample_no , blood_grp , blood_type ,cost_per_unit]
        );
        res.json(newBlood.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
});
// get all blood
app.get("/blood",async (req,res)=>{
    try {
        const allBlood = await pool.query(
            "SELECT * FROM blood"
        );
        res.json(allBlood.rows);
    } catch (error) {
        console.error(error.message)
    }
});
// get a blood
app.get("/blood/:sample_no",async(req,res)=>{
    try {
        const {sample_no} = req.params;
        const blood = await
         pool.query("SELECT * FROM blood WHERE sample_no = $1", [sample_no]);

         res.json(blood.rows[0])
    } catch (error) {
        console.error(error.message);
    }
});
// update a blood group
app.put("/blood/:sample_no/blood_grp", async (req,res) => {
    try {
      const {sample_no} =  req.params;
      const {blood_grp} = req.body;
      const updateGroup = await pool.query(
        "UPDATE blood SET blood_grp= $1 WHERE sample_no= $2",
      [blood_grp,sample_no]
      );
      res.json("Blood group was updated!");
    } catch (error) {
      console.log(error.message)
    }
  });
// update a blood type
app.put("/blood/:sample_no/blood_type", async (req,res) => {
    try {
      const {sample_no} =  req.params;
      const {blood_type} = req.body;
      const updateType = await pool.query(
        "UPDATE blood SET blood_type= $1 WHERE sample_no= $2",
      [blood_type,sample_no]
      );
      res.json("Blood type was updated!");
    } catch (error) {
      console.log(error.message)
    }
  });
// update cost per unit 
app.put("/blood/:sample_no/cost_per_unit", async (req,res) => {
    try {
      const {sample_no} =  req.params;
      const {cost_per_unit} = req.body;
      const updateCost = await pool.query(
        "UPDATE blood SET cost_per_unit= $1 WHERE sample_no= $2",
      [cost_per_unit,sample_no]
      );
      res.json("Blood cost was updated!");
    } catch (error) {
      console.log(error.message)
    }
  });
// delete a blood
app.delete("/blood/:sample_no", async (req, res) => {
    try {
      const { sample_no } = req.params;
      const deleteBloodbank = await pool.query("DELETE FROM blood WHERE sample_no = $1", [
        sample_no
      ]);
      res.json("Blood was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

//DONOR//

// create a donor
app.post("/donor",async (req,res) => {
    try {
        const 
        {  donor_id , donor_name ,    dob     , date_of_donation , contact_no} = req.body;
        const newDonor = await pool.query(
            "INSERT INTO donor(donor_id , donor_name ,    dob     , date_of_donation , contact_no) VALUES($1,$2,$3,$4,$5) RETURNING * ",
            [donor_id , donor_name ,    dob     , date_of_donation , contact_no]
        );
        res.json(newDonor.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
});
// get all donor
app.get("/donor",async (req,res)=>{
    try {
        const allDonor = await pool.query(
            "SELECT * FROM donor"
        );
        res.json(allDonor.rows);
    } catch (error) {
        console.error(error.message)
    }
});
// get a donor
app.get("/donor/:donor_id",async(req,res)=>{
    try {
        const {donor_id} = req.params;
        const donor = await
         pool.query("SELECT * FROM donor WHERE donor_id = $1", [donor_id]);

         res.json(donor.rows[0])
    } catch (error) {
        console.error(error.message);
    }
});
// update a donor name
app.put("/donor/:donor_id/donor_name", async (req,res) => {
    try {
      const {donor_id} =  req.params;
      const {donor_name} = req.body;
      const updateName = await pool.query(
        "UPDATE donor SET donor_name= $1 WHERE donor_id= $2",
      [donor_name,donor_id]
      );
      res.json("Donor name was updated!");
    } catch (error) {
      console.log(error.message)
    }
  });
// update a donor dob
app.put("/donor/:donor_id/dob", async (req,res) => {
    try {
      const {donor_id} =  req.params;
      const {dob} = req.body;
      const updateDob = await pool.query(
        "UPDATE donor SET dob= $1 WHERE donor_id= $2",
      [dob,donor_id]
      );
      res.json("Donor dob was updated!");
    } catch (error) {
      console.log(error.message)
    }
  });
// update a donor date of donation
app.put("/donor/:donor_id/date_of_donation", async (req,res) => {
    try {
      const {donor_id} =  req.params;
      const {date_of_donation} = req.body;
      const updateDateofDonation = await pool.query(
        "UPDATE donor SET date_of_donation= $1 WHERE donor_id= $2",
      [date_of_donation,donor_id]
      );
      res.json("Donor date of dontation was updated!");
    } catch (error) {
      console.log(error.message)
    }
  });
// update a donor contact no
app.put("/donor/:donor_id/contact_no", async (req,res) => {
    try {
      const {donor_id} =  req.params;
      const {date_of_donation} = req.body;
      const updateDateofDonation = await pool.query(
        "UPDATE donor SET date_of_donation= $1 WHERE donor_id= $2",
      [date_of_donation,donor_id]
      );
      res.json("Donor date of dontation was updated!");
    } catch (error) {
      console.log(error.message)
    }
  });

// delete a donor
app.delete("/donor/:donor_id", async (req, res) => {
    try {
      const { donor_id} = req.params;
      const deleteDonor = await pool.query("DELETE FROM donor WHERE donor_id = $1", [
        donor_id
      ]);
      res.json("Donor was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });
//RECEPTIONIST//

// create a receptionist
app.post("/receptionist",async (req,res) => {
    try {
        const 
        {   receptionist_id,receptionist_name} = req.body;
        const newReceptionist = await pool.query(
            "INSERT INTO receptionist( receptionist_id,receptionist_name) VALUES($1,$2) RETURNING * ",
            [receptionist_id,receptionist_name]
        );
        res.json(newReceptionist.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
});
// get all receptionist
app.get("/receptionist",async (req,res)=>{
    try {
        const allReceptinoist = await pool.query(
            "SELECT * FROM receptionist"
        );
        res.json(allReceptinoist.rows);
    } catch (error) {
        console.error(error.message)
    }
});
// get a receptionist
app.get("/receptionist/:receptionist_id",async(req,res)=>{
    try {
        const {receptionist_id} = req.params;
        const receptionist = await
         pool.query("SELECT * FROM receptionist WHERE receptionist_id = $1", [receptionist_id]);

         res.json(receptionist.rows[0])
    } catch (error) {
        console.error(error.message);
    }
});
// update a receptionist name
app.put("/receptionist/:receptionist_id/receptionist_name", async (req,res) => {
    try {
      const {receptionist_id} =  req.params;
      const {receptionist_name} = req.body;
      const updateName = await pool.query(
        "UPDATE receptionist SET receptionist_name= $1 WHERE receptionist_id= $2",
      [receptionist_name,receptionist_id]
      );
      res.json("Receptionist name was updated!");
    } catch (error) {
      console.log(error.message)
    }
  });
// delete a receptionist
app.delete("/receptionist/:receptionist_id", async (req, res) => {
    try {
      const { receptionist_id} = req.params;
      const deleteDonor = await pool.query("DELETE FROM receptionist WHERE receptionist_id = $1", [
        receptionist_id
      ]);
      res.json("Receptionist was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

app.listen(5000, () => {
    console.log("server has started on port 5000");
});

