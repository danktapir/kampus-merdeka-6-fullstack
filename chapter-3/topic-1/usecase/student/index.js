const studentRepo = require("../../repository/student");

exports.getStudents = (name, city, province) => {
    const data = studentRepo.getStudents(name, city, province);
    return data;
};

exports.getStudent = (id) => {
    const data = studentRepo.getStudent(id);
    return data;
};