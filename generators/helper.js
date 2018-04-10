const camelize = require('camelize');

module.exports = (name, package) => {
    return `package ${package}.helpers;

public class ${camelize(name)} {

}
`;
}