module.exports = (name, package) => {
    return `package ${package}.types;

import earlgrey.types.IType;

public class ${name} implements IType {

}
`;
}