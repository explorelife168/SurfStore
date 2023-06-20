<template>
  <div class="contact">
    <div class="mahalo">
      <div class="mahalo-title">
        <h3>Mahalo for visiting our website!</h3>
      </div>
      <div class="mahalo-pic">
        <img src="../Pic/Mahalo.jpeg" alt="" />
      </div>
      <div class="mahalo-narrative">
        <h6>Photo by Kevin Kinnear</h6>
      </div>
    </div>

    <div class="contact-main">
      <div class="text-con">
        <h3>Questions?</h3>
        <p>
          If you have any question about Surfboards by Donald Takayama, please
          feel free to contact us at <br /><a
            href="#info@hawaiianprodesigns.com"
          >
            info@hawaiianprodesigns.com</a
          >
        </p>
        <p>
          For Surftech customer service, please contact to <a href="#">here</a>
        </p>
        <p>Or simply use the following form!</p>
      </div>
      <div class="input">
        <div class="name">
          <label for="name">Name</label>
          <br />
          <!-- 姓名填寫欄 -->
          <input type="text" v-model.trim="nameInput" />
        </div>
        <div class="email">
          <label for="email">Email Address</label>
          <br />
          <!-- email填寫欄 -->
          <input type="text" v-model.trim="emailInput" />
        </div>
        <div class="message">
          <label for="message">Message</label>
          <br />
          <!-- message填寫欄 -->
          <textarea
            name="message"
            id="text"
            rows="8"
            v-model.trim="messageInput"
          ></textarea>
        </div>
        <button type="submit" @click="sendMessageHandler">Send</button>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "ContactComponent",
  data: function () {
    return {
      nameInput: "",
      emailInput: "",
      messageInput: "",
    };
  },
  methods: {
    sendMessageHandler() {
      if (!this.nameInput || !this.emailInput || !this.messageInput)
        return false;
      axios
        .post("http://localhost:3000/contents", {
          Name: this.nameInput,
          Email: this.emailInput,
          Message: this.messageInput,
        })
        .then((res) => {
          (this.nameInput = ""),
            (this.emailInput = ""),
            (this.messageInput = "");
          alert("reply as soon as possible");
          this.$store.commit("addContact", res.data);
        });
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.contact {
  max-width: 800.25px;
  margin: 0 auto;
  .mahalo {
    .mahalo-title {
      margin: 20px 0 10px 0;
      h3 {
        font-size: 24px;
        font-weight: 350;
        color: rgba(125, 153, 16, 0.697);
        margin: 40px 0 0 0;
      }
    }
    .mahalo-pic {
      img {
        width: 800.25px;
      }
    }
    .mahalo-narrative {
      text-align: center;
      margin: -5px 0 0 0;
      h6 {
        font-weight: lighter;
      }
    }
  }

  .contact-main {
    display: flex;
    flex-direction: column;
    align-items: center;

    .text-con {
      width: 800.25px;
      position: relative;
      h3 {
        font-weight: 400;
        margin: 50px 0 0 0;
      }
      h3::before {
        content: "";
        position: absolute;
        width: 800.25px;
        height: 3px;
        background-color: rgba(125, 153, 16, 0.697);
        top: 20px;
      }
      > p a {
        color: rgba(101, 125, 5, 0.795);
      }
      p {
        margin: 12px 0px;
        font-weight: 200;
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
    .input {
      width: 800.25px;
      .name,
      .email {
        margin: 10px 0;
        input {
          width: 50%;
          height: 30px;
          background-color: rgb(255, 253, 250);
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      }
      .email::before {
        content: "*";
        position: absolute;
        color: red;
        right: 69.6%;
      }
      .message {
        margin: 10px 0;
        width: 100%;
        textarea {
          width: 800.25px;
          height: 188px;
          background-color: rgb(255, 253, 250);
          border: 1px solid #ccc;
          border-radius: 4px;
          // writing-mode: horizontal-tb;
          // text-rendering: auto;
          // letter-spacing: normal;
          // word-spacing: normal;
        }
      }
      .message::before {
        content: "*";
        position: absolute;
        color: red;
        right: 72.5%;
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
}
</style>
