import axios from "axios";

const fetchUsers = async (number) => {
  try {
    const { data } = await axios.get(
      "https://randomuser.me/api/?results=" + number
    );
    return data.results.map((user) => {
      const name = user.name.first + " " + user.name.last;
      const photo = user.picture.large;
      return { name, photo };
    });
  } catch (err) {
    console.log("error", err);
  }
};

export default fetchUsers;
