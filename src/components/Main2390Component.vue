<template>
  <div class="main2">
    <div class="text">
      <h3>Questions?</h3>
      <p>
        If you have any question about Surfboards by Donald Takayama, please
        feel free to contact us at <br /><a href="#">
          info@hawaiianprodesigns.com</a
        >
      </p>
      <p>Or simply use the following form!</p>
    </div>
    <div class="input-text">
      <div class="name">
        <label for="name">Name</label>
        <br />
        <input type="text" />
      </div>
      <div class="email">
        <label for="email">Email Address</label>
        <br />
        <input type="text" />
      </div>
      <div class="message">
        <label for="message">Message</label>
        <br />
        <textarea name="message" id="text" rows="8"></textarea>
      </div>
      <button type="submit">Send</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Main2390Component",
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.main2 {
  display: flex;
  flex-direction: column;
  align-items: center;

  .text {
    width: 370px;
    position: relative;
    h3 {
      font-weight: 400;
    }
    > p a {
      color: rgba(101, 125, 5, 0.795);
    }
    p {
      margin: 12px 0px;
    }
  }
  .text::before {
    content: "";
    width: 100%;
    height: 3px;
    background-color: rgba(157, 195, 5, 0.697);
    position: absolute;
    top: -10px;
  }
  .input-text {
    width: 370px;
    .name,
    .email {
      margin: 10px 0;
      input {
        width: 50%;
        height: 30px;
        background-color: rgba(247, 245, 223, 0.93);
        border: 2px solid #ccc;
        border-radius: 4px;
      }
    }
    .message {
      margin: 10px 0;
      width: 100%;
      textarea {
        width: 370px;
        height: 188px;
        background-color: rgba(247, 245, 223, 0.93);
        border: 2px solid #ccc;
        border-radius: 4px;
        // writing-mode: horizontal-tb;
        // text-rendering: auto;
        // letter-spacing: normal;
        // word-spacing: normal;
      }
    }
    button {
      width: 4.5rem;
      height: 2rem;
      color: white;
      background-color: rgba(101, 125, 5, 0.795);
      border: none;
    }
    button:hover {
      background-color: rgba(41, 51, 4, 0.839);
      cursor: pointer;
    }
  }
}
</style>
