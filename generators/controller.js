const camelize = require('camelize');

module.exports = (name, package) => {
    return `package ${package}.controller;

import earlgrey.annotations.Controller;
import earlgrey.annotations.ControllerAction;
import earlgrey.annotations.ParamRequire;
import earlgrey.annotations.Policie;
import earlgrey.annotations.Route;
import earlgrey.core.ControllerCore;
import earlgrey.core.HttpRequest;
import earlgrey.core.HttpResponse;

import org.json.JSONObject;

@Controller(
    description = "${camelize(name)} controller",
    name = "${camelize(name)}",
    version = 1
)
@Route(route = "/${name.toLowerCase().replace('-', '_')}")
public class ${camelize(name)} extends ControllerCore {
    @ControllerAction(
        description = "Ping action",
        name = "Ping",
        version = 1
    )
    @Route(route = "/ping")
    @Policie(name = "AllPass")
    public static void ping(HttpRequest req, HttpResponse res) {
        res.json(new JSONObject().put("response", "pong"));
        return;
    }
}`;
}
