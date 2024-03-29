<template>
  <div class="contact-390">
    <div class="mahalo-title-390">
      <h3>Mahalo for visiting our website!</h3>
    </div>
    <div class="mahalo-pic-390">
      <img src="../Pic/Mahalo.jpeg" alt="" />
    </div>
    <div class="mahalo-narrative-390">
      <h6>Photo by Kevin Kinnear</h6>
    </div>
    <div class="contact-main-390">
      <div class="text-con-390">
        <h3>Questions?</h3>
        <p>
          If you have any question about Surfboards by Donald Takayama, please
          feel free to contact us at<a href="#info@hawaiianprodesigns.com">
            info@hawaiianprodesigns.com</a
          >
        </p>
        <p>
          For Surftech customer service, please contact to <a href="#">here</a>
        </p>
        <p>Or simply use the following form!</p>
      </div>
      <div class="input-390">
        <div class="name-390">
          <label for="name">Name</label>
          <br />
          <!-- 姓名填寫欄 -->
          <input type="text" v-model.trim="nameInput" />
        </div>
        <div class="email-390">
          <label for="email">Email Address</label>
          <br />
          <!-- email填寫欄 -->
          <input type="text" v-model.trim="emailInput" />
        </div>
        <div class="message-390">
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
import axios from "axios";

export default {
  name: "Contact390Component",
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

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.contact-390 {
  max-width: 390px;
  margin: 0 auto;

  .mahalo-title-390 {
    margin: 20px 0 10px 0;
    h3 {
      font-size: 20px;
      color: rgba(125, 153, 16, 0.697);
      padding: 0 10px;
    }
  }
  .mahalo-pic-390 {
    width: 370px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .mahalo-narrative-390 {
    text-align: center;
    margin: -5px 0 0 0;
    h6 {
      font-weight: lighter;
    }
  }
  .contact-main-390 {
    display: flex;
    flex-direction: column;
    align-items: center;

    .text-con-390 {
      width: 370px;
      position: relative;
      h3 {
        font-weight: 400;
        margin: 50px 0 0 0;
      }
      > p a {
        color: rgba(101, 125, 5, 0.795);
      }
      p {
        margin: 12px 0px;
        font-weight: 200;
      }
    }
  }
  .text-con-390::before {
    content: "";
    width: 100%;
    height: 3px;
    background-color: rgba(157, 195, 5, 0.697);
    position: absolute;
    top: 10px;
  }
  .input-390 {
    width: 370px;
    .name-390,
    .email-390 {
      margin: 10px 0;
      input {
        width: 50%;
        height: 30px;
        background-color: rgb(255, 253, 250);
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }
    .name-390::before {
      content: "*";
      position: absolute;
      color: red;
      right: 83%;
    }
    .email-390::before {
      content: "*";
      position: absolute;
      color: red;
      right: 67%;
    }

    .message-390::before {
      content: "*";
      position: absolute;
      color: red;
      right: 77%;
    }
  }
  .message-390 {
    margin: 10px 0;
    width: 100%;
    textarea {
      width: 370px;
      height: 188px;
      background-color: rgb(255, 253, 250);
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
  button {
    width: 4.5rem;
    height: 2rem;
    color: white;
    background-color: rgba(101, 125, 5, 0.795);
    border: none;
  }
}

//
//   }
// }
// h6::before {
//       content: "";
//       position: absolute;
//       width: 370px;
//       height: 3px;
//       background-color: rgba(125, 153, 16, 0.697);
//       top: 20px;
//     }
</style>
