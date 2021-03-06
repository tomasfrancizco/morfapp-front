import axios from "axios";

const isProduction = process.env.NODE_ENV === "production";
const base_url = isProduction
  ? "https://morfapp.herokuapp.com"
  : "http://localhost:5000";

const logoutRedirect = isProduction
  ? "https://morfapp.herokuapp.com"
  : "http://localhost:5000";

export const signup = auth => {
  return axios
    .post(`${base_url}/signup`, auth)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const login = auth => {
  return axios
    .post(`${base_url}/login`, auth)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("TOKEN");
  localStorage.removeItem("USER");
  window.location.reload();
  window.location.href = logoutRedirect;
};

export const editProfile = profile => {
  return axios
    .patch(
      `${base_url}/profile/${JSON.parse(localStorage.getItem("USER"))._id}`,
      profile,
      {
        headers: {
          Authorization: localStorage.getItem("TOKEN"),
          "Content-Type": "multipart/form-data"
        }
      }
    )
    .then(res => res.data.profile)
    .catch(error => error);
};

export const getProfile = () => {
  return axios.get(`${base_url}/profile/${JSON.parse(localStorage.getItem("USER"))._id}`, {
    headers: {
      Authorization: localStorage.getItem("TOKEN")
    }
  })
    .then(res => res.data.profile)
    .catch(error => error)
}

export const favCustomRecipe = (favs, id) => {
  return axios.patch(
    `${base_url}/profile/favs/${id}`, {favs} 
  )
  .then(res => res.data.profile)
  .catch(error => console.log(error));
};
