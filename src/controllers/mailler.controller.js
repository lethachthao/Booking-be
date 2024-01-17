const nodemailer = require("nodemailer"); // đây là thư viện send mail khá nổi tiếng, mình sẽ dùng thư viện này để xử lí việc gửi mail

const sendMail = async (data, callback) => {
  const { title, to, ...otherOptions } = data || {};
  const { name, email } = to || {};

  // Create a SMTP transporter object (tạo cấu hình cho send mail SMTP)
  // kể từ năm 2022 trở đi, google đã loại bỏ phương thức gọi là "less secure" cho nên tất cả những cách lấy quyền truy cập thông qua phương thức đó không còn nữa, chúng ta sẽ dùng 1 cái gọi là OAuth2
  // chi tiết: https://developers.google.com/identity/protocols/oauth2
  // hiểu đơn giản đó là một phương thức để xác thực thông qua API của google

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "lethachthao12345@gmail.com",
      clientId:
        "347859416301-uaqk03egcnidrovgmk85rffonapf3bld.apps.googleusercontent.com",
      clientSecret: "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",
      accessToken:
        "ya29.a0AfB_byANvKllJ31GCO0a_x4n347icEKYqdqXKbcVXC07vm3nl_ZHCTLaUEtl5p3iamJfhGHMZuIQRGyEH7lWNozP9XwJzV-GbXlaz2uEEnCyUDOTgV9xD8_H2oSivB6Ao3NfzUFXRBED6i0eoQnqaPs6YdOjuGptoMIOaCgYKATUSARASFQHGX2Miv6mHKgzJVH1fXmL4bmRdww0171",
      refreshToken:
        "1//04ZepXi5vAT4QCgYIARAAGAQSNwF-L9Ir6539JqtEC3nuYbdWAMiCjqkBVjyJtbjU9PPLcO2uIRdASfeJTAGeCVSyROhiRCsW5m8",
      expires: 3599,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Message object
  const message = {
    from: "Lê Thạch Thảo <lethachthao12345@gmail.com>",

    // email của người cần gửi, ví dụ nữa mình gửi qua email của user đăng kí account thành công
    to: `${name} <${email}>`,

    // tiêu đề email
    subject: title,

    // nội dung gmail

    // HTML body nếu cần gửi định dạng HTML để hiển thị cho người dùng thì em bỏ cái dòng comment code bên dưới ra
    // html:
    //   '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
    //   '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',

    // đính kèm tập tin
    // attachments: [
    //     {
    //         filename: 'seed1.jpg', // tên file sẽ xuất hiện trong gmail lúc gửi
    //         // path: __dirname + '/images/seed1.jpg', // đường dẫn tới file cần gửi
    //         path: 'https://i.pinimg.com/564x/49/a4/a9/49a4a963879ef320e36581861d3657ce.jpg',
    //         cid: 'seed1', // ID của file cần gửi, ID giữa các file này phải không được trùng nhau, nó do mình tự đặt
    //     },
    // ],
    ...otherOptions,
  };

  try {
    // tiến hành gửi mail
    let info = await transporter.sendMail(message);
    // console.log('Message sent successfully as %s', info.messageId);

    // sau khi gửi thành công thì gửi lên một callback để dùng về sau
    callback?.(true, info);
  } catch (err) {
    console.error(err);
    callback?.(false, err);
  }
};

module.exports = sendMail;
