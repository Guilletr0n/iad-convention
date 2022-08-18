import * as React from "react"

export default function FormPage() {
  const [value, setValue] = React.useState({})
  const [serverResponse, setServerResponse] = React.useState(``)

  // Listen to form changes and save them.
  function handleChange(e) {
    value[e.target.id] = e.target.value
    setServerResponse(``)
    setValue({ ...value })
  }

  // When the form is submitted, send the form values
  // to our function for processing.
  async function onSubmit(e) {
    e.preventDefault()
    const response = await window
      .fetch(`https://getform.io/f/7d62949e-0866-46e4-a294-8775d4201508`, {
        method: `POST`,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(value),
      })
      .then(res => res.json())

    setServerResponse(response)
  }

  return (
    <div>
      <div>Server response: {serverResponse}</div>
      <form onSubmit={onSubmit} method="POST" action="/api/form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={value[`name`] || ``}
          onChange={handleChange}
        />
        <br/>
        <label htmlfor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={value[`email`] || ``}
          onChange={handleChange}
        />
        <br/>
        <input type="submit" />
      </form>
    </div>
  )
}