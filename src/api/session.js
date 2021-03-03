import URL from "./index"

// These are all the same thing the only thing thats different about them are the endpoints.
// We can make these into one function and just vary the endpoint by sending another parameter "endpoint" to.
// Though it helps with using setError() if each call is discrete. So I'll leave it commented for now until I find a better way to handle the errors

/*
const postAPI = (values, endPoint) =>
  new Promise((resolve, reject) => {
    fetch(`${URL}/${endPoint}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ session: values }),
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
*/

const authUser = (values) =>
  new Promise((resolve, reject) => {
    fetch(`${URL}/authuser`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ session: values }),
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })

const resendTFACode = (values) =>
  new Promise((resolve, reject) => {
    fetch(`${URL}/resendtfa`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ session: values }),
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })

const createSession = (values) =>
  new Promise((resolve, reject) => {
    fetch(`${URL}/sessions`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ session: values }),
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })

const destroySession = () =>
  new Promise((resolve, reject) => {
    fetch(`${URL}/sessions`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })

export { createSession, destroySession, authUser, resendTFACode }
