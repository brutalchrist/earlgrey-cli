module.exports = (name, package, tablename) => {
    return `package ${package}.model;

import earlgrey.annotations.Model;
import earlgrey.annotations.ModelField;
import earlgrey.core.ModelCore;

@Model(
    name = "${name}",
    tableName = "${tablename}"
    version = 1
)
public class ${name} extends ModelCore {

}`;
}