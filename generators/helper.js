const camelize = require('camelize');

module.exports = (name, package) => {
    return `package ${package}.helpers;

import earlgrey.annotations.Helper;

@Helper()
public class ${camelize(name)} {

}
`;
}