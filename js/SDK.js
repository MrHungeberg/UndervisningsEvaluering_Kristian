var SDK = {

    serverURL: "http://localhost:9999/api",

    login: function (mail, password, cb) {


      let SALT;
      let passWithSalt = password + SALT;
      let hashedPassWithSalt = md5(passWithSalt);
      let passWithSalt2 = hashedPassWithSalt + SALT;
      let hashedPassWithSalt2 = md5(passWithSalt2);

        $.ajax({
           type: 'POST',
           url: SDK.serverURL + "/login",
           contentType: "application/json; charset=utf-8",
           data: JSON.stringify({
             cbsMail: mail,
             password: password
           }),
           dataType: "json",
           success: function(res) {
             var userId = JSON.parse(atob(res))
             SDK.Storage.persist("userId", userId);
             alert(userId);
           },
           error: function(res) { alert('Failed!'); },
       });
      /*
       $.ajax({
          type: 'GET',
          url: SDK.serverURL + "/course/6",
          dataType:'json',
          success: function() { alert("Success"); },
          error: function() { alert('Failed!'); },
      });
      */

        /*
        this.request({
            data: {
                cbsMail: username,
                password: password
            },
            url: "/login/",
            method: "POST"
        }, function (err, data) {

            //On login-error
            if (err) return cb(err);

            SDK.Storage.persist("userId", data.userId);
            SDK.Storage.persist("user", data.user);

            cb(null, data);

        });*/
    },

    Storage: {
        prefix: "UndervisningsEvalueringSDK",
        persist: function (key, value) {
            window.localStorage.setItem(this.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
        },
        load: function (key) {
            var val = window.localStorage.getItem(this.prefix + key);
            try {
                return JSON.parse(val);
            }
            catch (e){
                return val;
            }
        },
        remove:function (key) {
            window.localStorage.removeItem(this.prefix + key);
        }
    }
}
