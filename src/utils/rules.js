const rules = {
  0: {
    check: function (password) {
      if (password.length < 6) {
        return false;
      } else {
        return true;
      }
    },
    title: "Пароль должен состоять не менее чем из 6+ символов",
  },
  1: {
    check: function (password) {
      let num = (password.match(/\d/g) || []).length;
      if (num < 4) {
        return false;
      } else {
        return true;
      }
    },
    title: "Пароль должен включать в себя не менее 4 цифр",
  },
  2: {
    check: function (password) {
      let sum = 0;
      let numbers = password.match(/\d/g) || [];
      for (let i in numbers) {
        sum += +numbers[i];
      }
      console.log(sum);
      if (sum != 25) {
        return false;
      } else {
        return true;
      }
    },
    title: "Сумма всех цифр в пароле должна быть равна 25",
  },
  3: {
    check: function (password) {
      if (
        password.includes("🌖") ||
        password.includes("🌒") ||
        password.includes("🌔") ||
        password.includes("🌓") ||
        password.includes("🌕") ||
        password.includes("🌑") ||
        password.includes("🌗") ||
        password.includes("🌘") ||
        password.includes("🌜") ||
        password.includes("🌙")
      ) {
        return true;
      } else {
        return false;
      }
    },
    title: "Пароль должен включать в себя эмодзи актуальной фазы луны",
  },
  4: {
    check: function (password) {
      if (password.includes("22")) {
        return true;
      } else {
        return false;
      }
    },
    title: "Пароль должен включать в себя корень 484",
  },
  5: {
    check: function (password) {
      if (password.includes("NewPassword Game")) {
        return true;
      } else {
        return false;
      }
    },
    title: "Пароль должен включать в себя название игры",
  },
  6: {
    check: function (password) {
      if (password.includes("Моринці")) {
        return true;
      } else {
        return false;
      }
    },
    title:
      "Пароль должен включать в себя название села, в котором родился Тарас Шевченко",
  },
};
export default rules; //password922912🌗NewPassword GameМоринці
