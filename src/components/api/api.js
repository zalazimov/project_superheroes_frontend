import Axios from "./axios";

export async function fetchHeroesData() {
  try {
    const result = await Axios.get("/heroes");
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchIndexData() {
  try {
    const result = await Axios.get(`/heroes/limit/500`);
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchIndexDataDesc() {
  try {
    const result = await Axios.get(`/heroes/limit/desc/500`);
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchHeroById(id) {
  try {
    const result = await Axios.get(`/heroes/${id}`);
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteHeroById(id) {
  try {
    const result = await Axios.delete(`/heroes/${id}`);
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchHeroByName(name) {
  try {
    const result = await Axios.get(`/heroes`, {
      params: { name: name },
    });
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchBySubstring(name) {
  try {
    const result = await Axios.get(`/heroes/search`, {
      params: { name: name },
    });
    return result;
  } catch (e) {
    console.log({ message: "no results", err: e });
  }
}

export async function newEntry(entry) {
  try {
    const result = await Axios.post(`/heroes`, entry);
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function editHeroInDB(body, id) {
  try {
    const result = await Axios.put(`/heroes/${id}`, body);
    return result;
  } catch (e) {
    console.log(e);
  }
}
