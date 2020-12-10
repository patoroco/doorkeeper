module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(131);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRegistry = void 0;
exports.deleteRegistry = ({ httpClient, }) => () => {
    const path = '/registry';
    const url = `${path}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-registry.js.map

/***/ }),
/* 4 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.patchDefaultProject = void 0;
exports.patchDefaultProject = ({ httpClient, }) => ({ description, environment, is_default, name, purpose, }) => {
    const path = '/projects';
    const body = {
        description,
        environment,
        is_default,
        name,
        purpose,
    };
    const url = `${path}/default`;
    return httpClient.patch(url, body);
};
//# sourceMappingURL=patch-default-project.js.map

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.removeRulesFromLoadBalancer = void 0;
exports.removeRulesFromLoadBalancer = ({ httpClient, }) => ({ forwarding_rules, id, load_balancer_id, }) => {
    const path = '/load_balancers';
    const body = { forwarding_rules };
    const url = `${path}/${load_balancer_id || id}/forwarding_rules`;
    return httpClient.delete(url, { data: body });
};
//# sourceMappingURL=remove-rules-from-load-balancer.js.map

/***/ }),
/* 11 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rebootDroplet = void 0;
exports.rebootDroplet = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'reboot';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=reboot-droplet.js.map

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createVpc = void 0;
exports.createVpc = ({ httpClient, }) => ({ description, ip_range, name, region, }) => {
    const path = '/vpcs';
    const body = {
        description,
        ip_range,
        name,
        region,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-vpc.js.map

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDatabaseClusterUser = void 0;
exports.removeDatabaseClusterUser = ({ httpClient, }) => ({ database_cluster_id, user_name, }) => {
    const path = '/databases';
    const url = `${path}/${database_cluster_id}/users/${user_name}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=remove-database-cluster-user.js.map

/***/ }),
/* 17 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vpc = exports.volume = exports.tag = exports.sshKey = exports.snapshot = exports.size = exports.region = exports.project = exports.loadBalancer = exports.kubernetes = exports.image = exports.floatingIp = exports.firewall = exports.droplet = exports.domain = exports.database = exports.customer = exports.containerRegistry = exports.certificate = exports.cdnEndpoint = exports.action = exports.account = void 0;
const account = __importStar(__webpack_require__(221));
exports.account = account;
const action = __importStar(__webpack_require__(167));
exports.action = action;
const cdnEndpoint = __importStar(__webpack_require__(449));
exports.cdnEndpoint = cdnEndpoint;
const certificate = __importStar(__webpack_require__(371));
exports.certificate = certificate;
const containerRegistry = __importStar(__webpack_require__(222));
exports.containerRegistry = containerRegistry;
const customer = __importStar(__webpack_require__(237));
exports.customer = customer;
const database = __importStar(__webpack_require__(566));
exports.database = database;
const domain = __importStar(__webpack_require__(132));
exports.domain = domain;
const droplet = __importStar(__webpack_require__(909));
exports.droplet = droplet;
const firewall = __importStar(__webpack_require__(929));
exports.firewall = firewall;
const floatingIp = __importStar(__webpack_require__(694));
exports.floatingIp = floatingIp;
const image = __importStar(__webpack_require__(744));
exports.image = image;
const kubernetes = __importStar(__webpack_require__(336));
exports.kubernetes = kubernetes;
const loadBalancer = __importStar(__webpack_require__(885));
exports.loadBalancer = loadBalancer;
const project = __importStar(__webpack_require__(609));
exports.project = project;
const region = __importStar(__webpack_require__(898));
exports.region = region;
const size = __importStar(__webpack_require__(620));
exports.size = size;
const snapshot = __importStar(__webpack_require__(978));
exports.snapshot = snapshot;
const sshKey = __importStar(__webpack_require__(46));
exports.sshKey = sshKey;
const tag = __importStar(__webpack_require__(520));
exports.tag = tag;
const volume = __importStar(__webpack_require__(216));
exports.volume = volume;
const vpc = __importStar(__webpack_require__(938));
exports.vpc = vpc;
//# sourceMappingURL=index.js.map

/***/ }),
/* 18 */
/***/ (function(module) {

module.exports = eval("require")("encoding");


/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDropletsFromFirewall = void 0;
exports.removeDropletsFromFirewall = ({ httpClient, }) => ({ droplet_ids, firewall_id, }) => {
    const path = '/firewalls';
    const body = {
        droplet_ids,
    };
    const url = `${path}/${firewall_id}/droplets`;
    return httpClient.delete(url, { data: body });
};
//# sourceMappingURL=remove-droplets-from-firewall.js.map

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listSshKeys = void 0;
exports.listSshKeys = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/account/keys';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-ssh-keys.js.map

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=forwarding-rule.js.map

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(751), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 30 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getSnapshot = void 0;
exports.getSnapshot = ({ httpClient, }) => ({ id, snapshot_id, }) => {
    const path = '/snapshots';
    const url = `${path}/${snapshot_id || id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-snapshot.js.map

/***/ }),
/* 31 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listImageActions = void 0;
exports.listImageActions = ({ httpClient, }) => ({ page = 1, per_page = 25, image_id, }) => {
    const path = '/images';
    const queryParams = { page, per_page };
    const url = `${path}/${image_id}/actions`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-image-actions.js.map

/***/ }),
/* 32 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listDatabaseClusters = void 0;
exports.listDatabaseClusters = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/databases';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-database-clusters.js.map

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listInvoiceItems = void 0;
exports.listInvoiceItems = ({ httpClient, }) => ({ invoice_uuid, page = 1, per_page = 25, }) => {
    const path = '/customers/my/invoices';
    const queryParams = { page, per_page };
    const url = `${path}/${invoice_uuid}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-invoice-items.js.map

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(398), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(688), exports);
__exportStar(__webpack_require__(468), exports);
__exportStar(__webpack_require__(74), exports);
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(510), exports);
__exportStar(__webpack_require__(29), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listDatabaseClusterDbs = void 0;
exports.listDatabaseClusterDbs = ({ httpClient, }) => ({ page = 1, per_page = 25, database_cluster_id, }) => {
    const path = '/databases';
    const queryParams = { page, per_page };
    const url = `${path}/${database_cluster_id}/dbs`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-database-cluster-dbs.js.map

/***/ }),
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, __unusedexports, __webpack_require__) {

module.exports = __webpack_require__(352);

/***/ }),
/* 54 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=database-cluster.js.map

/***/ }),
/* 55 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=tag.js.map

/***/ }),
/* 56 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodePool = void 0;
exports.getNodePool = ({ httpClient, }) => ({ kubernetes_cluster_id, node_pool_id, }) => {
    const path = '/kubernetes/clusters';
    const url = `${path}/${kubernetes_cluster_id}/node_pools/${node_pool_id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-node-pool.js.map

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNode = void 0;
exports.deleteNode = ({ httpClient, }) => ({ kubernetes_cluster_id, node_pool_id, node_id, drain_node = true, replace_node = false, }) => {
    const path = '/kubernetes/clusters';
    const url = `${path}/${kubernetes_cluster_id}/node_pools/${node_pool_id}/nodes/${node_id}`;
    const queryParams = {
        replace: replace_node ? 1 : 0,
        skip_drain: drain_node ? 0 : 1,
    };
    return httpClient.delete(url, { params: queryParams });
};
//# sourceMappingURL=delete-node.js.map

/***/ }),
/* 61 */,
/* 62 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProject = void 0;
exports.updateProject = ({ httpClient, }) => ({ description, environment, is_default, name, project_id, purpose, }) => {
    const path = '/projects';
    const body = {
        description,
        environment,
        is_default,
        name,
        purpose,
    };
    const url = `${path}/${project_id}`;
    return httpClient.put(url, body);
};
//# sourceMappingURL=update-project.js.map

/***/ }),
/* 63 */,
/* 64 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;
;
//# sourceMappingURL=invoice-summary.js.map

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnectionPool = void 0;
exports.getConnectionPool = ({ httpClient, }) => ({ database_cluster_id, pool_name, }) => {
    const path = '/databases';
    const url = `${path}/${database_cluster_id}/pools/${pool_name}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-connection-pool.js.map

/***/ }),
/* 69 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseClusterEvictionPolicy = void 0;
exports.getDatabaseClusterEvictionPolicy = ({ httpClient, }) => ({ database_cluster_id, }) => {
    const path = '/databases';
    const url = `${path}/${database_cluster_id}/eviction_policy`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-database-cluster-eviction-policy.js.map

/***/ }),
/* 70 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreDroplet = void 0;
exports.restoreDroplet = ({ httpClient, }) => ({ droplet_id, image, }) => {
    const path = '/droplets';
    const type = 'restore';
    const body = { image, type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=restore-droplet.js.map

/***/ }),
/* 71 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listActions = void 0;
exports.listActions = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/actions';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-actions.js.map

/***/ }),
/* 72 */
/***/ (function(module, __unusedexports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer') {
  module.exports = __webpack_require__(235);
} else {
  module.exports = __webpack_require__(738);
}


/***/ }),
/* 73 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(356), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 74 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getSshKey = void 0;
exports.getSshKey = ({ httpClient, }) => ({ id, ssh_key_id, }) => {
    const path = '/account/keys';
    const url = `${path}/${ssh_key_id || id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-ssh-key.js.map

/***/ }),
/* 75 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=firewall-rule-node.js.map

/***/ }),
/* 76 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.powerCycleDroplet = void 0;
exports.powerCycleDroplet = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'power_cycle';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=power-cycle-droplet.js.map

/***/ }),
/* 77 */,
/* 78 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listImages = void 0;
exports.listImages = ({ httpClient, }) => ({ page = 1, per_page = 25, tag_name, type, user_images, }) => {
    const path = '/images';
    const queryParams = { page, per_page };
    const hasTypeFilter = typeof type === 'string';
    const hasPrivateFilter = typeof user_images === 'boolean';
    const hasTagFilter = typeof tag_name === 'string';
    if (hasTypeFilter)
        Object.assign(queryParams, { type });
    if (hasPrivateFilter)
        Object.assign(queryParams, { private: user_images });
    if (hasTagFilter)
        Object.assign(queryParams, { tag_name });
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-images.js.map

/***/ }),
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=project-resource-links.js.map

/***/ }),
/* 82 */
/***/ (function(__unusedmodule, exports) {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
//# sourceMappingURL=utils.js.map

/***/ }),
/* 83 */,
/* 84 */,
/* 85 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createReadOnlyReplica = void 0;
exports.createReadOnlyReplica = ({ httpClient, }) => ({ database_cluster_id, name, region, size, tags, }) => {
    const path = '/databases';
    const body = {
        name,
        region,
        size,
        tags,
    };
    const url = `${path}/${database_cluster_id}/replicas`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-read-only-replica.js.map

/***/ }),
/* 86 */,
/* 87 */
/***/ (function(module) {

module.exports = require("os");

/***/ }),
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getClusterlintDiagnostics = void 0;
exports.getClusterlintDiagnostics = ({ httpClient, }) => ({ kubernetes_cluster_id, }) => {
    const path = '/kubernetes/clusters';
    const url = `${path}/${kubernetes_cluster_id}/clusterlint`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-clusterlint-diagnostics.js.map

/***/ }),
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listFloatingIpActions = void 0;
exports.listFloatingIpActions = ({ httpClient, }) => ({ ip, page = 1, per_page = 25, }) => {
    const path = '/floating_ips';
    const queryParams = { page, per_page };
    const url = `${path}/${ip}/actions`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-floating-ip-actions.js.map

/***/ }),
/* 100 */,
/* 101 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getVolumeAction = void 0;
exports.getVolumeAction = ({ httpClient, }) => ({ action_id, volume_id, }) => {
    const path = '/volumes';
    const url = `${path}/${volume_id}/actions/${action_id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-volume-action.js.map

/***/ }),
/* 102 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// For internal use, subject to change.
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__webpack_require__(747));
const os = __importStar(__webpack_require__(87));
const utils_1 = __webpack_require__(82);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),
/* 103 */,
/* 104 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCdnEndpoint = void 0;
exports.getCdnEndpoint = ({ httpClient, }) => ({ cdn_endpoint_id, }) => {
    const path = '/cdn/endpoints';
    const url = `${path}/${cdn_endpoint_id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-cdn-endpoint.js.map

/***/ }),
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listDomainRecords = void 0;
exports.listDomainRecords = ({ httpClient, }) => ({ domain_name, page = 1, per_page = 25, }) => {
    const path = '/domains';
    const queryParams = { page, per_page };
    const url = `${path}/${domain_name}/records`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-domain-records.js.map

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(632);

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 111 */,
/* 112 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(81), exports);
__exportStar(__webpack_require__(612), exports);
__exportStar(__webpack_require__(302), exports);
__exportStar(__webpack_require__(864), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 113 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=database-cluster-user.js.map

/***/ }),
/* 114 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(531), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 115 */,
/* 116 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateKubernetesCluster = void 0;
exports.updateKubernetesCluster = ({ httpClient, }) => ({ auto_upgrade, kubernetes_cluster_id, maintenance_policy, name, tags, }) => {
    const path = '/kubernetes/clusters';
    const body = {
        auto_upgrade,
        maintenance_policy,
        name,
        tags,
    };
    const url = `${path}/${kubernetes_cluster_id}`;
    return httpClient.put(url, body);
};
//# sourceMappingURL=update-kubernetes-cluster.js.map

/***/ }),
/* 117 */,
/* 118 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createCdnEndpoint = void 0;
exports.createCdnEndpoint = ({ httpClient, }) => ({ origin, ttl, certificate_id, custom_domain, }) => {
    const path = '/cdn/endpoints';
    const body = {
        origin,
        ttl,
        certificate_id,
        custom_domain,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-cdn-endpoint.js.map

/***/ }),
/* 119 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listTags = void 0;
exports.listTags = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/tags';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-tags.js.map

/***/ }),
/* 120 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(808), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 121 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=health-check.js.map

/***/ }),
/* 122 */,
/* 123 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(860), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __webpack_require__(163);
const digitalocean_1 = __webpack_require__(450);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // const config: ActionConfig = {
        //   DO_TOKEN: process.env.DO_TOKEN as string,
        //   action: "remove",
        //   IP: "12.34.56.78",
        //   port: 22,
        //   protocol: "tcp",
        //   dryrun: false,
        //   firewallName: "ubuntu-dokku"
        // };
        const config = yield utils_1.getConfig();
        console.log(`Current IP: ${config.IP}`);
        if (config.dryrun) {
            console.log("Running in DryRun MODE...");
        }
        const client = digitalocean_1.getDOClient(config);
        const firewall = yield digitalocean_1.getFirewall(client, config.firewallName);
        digitalocean_1.printFirewallRules(firewall.inbound_rules, "(original)");
        const newRules = digitalocean_1.generateInboundRules(firewall.inbound_rules, config);
        yield digitalocean_1.updateInboundRules(client, firewall, newRules, config.dryrun);
    });
}
main();


/***/ }),
/* 132 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(494), exports);
__exportStar(__webpack_require__(899), exports);
__exportStar(__webpack_require__(833), exports);
__exportStar(__webpack_require__(381), exports);
__exportStar(__webpack_require__(746), exports);
__exportStar(__webpack_require__(880), exports);
__exportStar(__webpack_require__(109), exports);
__exportStar(__webpack_require__(306), exports);
__exportStar(__webpack_require__(863), exports);
__exportStar(__webpack_require__(965), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 133 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(815);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.snapshotDroplet = void 0;
exports.snapshotDroplet = ({ httpClient, }) => ({ droplet_id, name, }) => {
    const path = '/droplets';
    const type = 'snapshot';
    const body = { name, type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=snapshot-droplet.js.map

/***/ }),
/* 138 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.untagResources = void 0;
exports.untagResources = ({ httpClient, }) => ({ tag_name, resources, }) => {
    const path = '/tags';
    const body = { resources };
    const url = `${path}/${tag_name}/resources`;
    return httpClient.delete(url, { data: body });
};
//# sourceMappingURL=untag-resources.js.map

/***/ }),
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(121), exports);
__exportStar(__webpack_require__(558), exports);
__exportStar(__webpack_require__(818), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 146 */,
/* 147 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.configureRegistry = void 0;
exports.configureRegistry = ({ httpClient, }) => ({ name, }) => {
    const path = '/registry';
    const body = { name };
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=configure-registry.js.map

/***/ }),
/* 148 */,
/* 149 */,
/* 150 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=cdn-endpoint.js.map

/***/ }),
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=database-cluster-connection-pool.js.map

/***/ }),
/* 155 */,
/* 156 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=kubernetes-cluster-node-pool-node.js.map

/***/ }),
/* 157 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(713), exports);
__exportStar(__webpack_require__(793), exports);
__exportStar(__webpack_require__(75), exports);
__exportStar(__webpack_require__(678), exports);
__exportStar(__webpack_require__(672), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalIP = exports.getConfig = void 0;
const core = __importStar(__webpack_require__(470));
const node_fetch_1 = __importDefault(__webpack_require__(454));
function getConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const token = core.getInput("digitaloceanToken");
        if (token == undefined || token.length == 0) {
            throw new Error("You must specify the 'digitaloceanToken' input.");
        }
        const firewallName = core.getInput("firewallName");
        if (firewallName == undefined || firewallName.length == 0) {
            throw new Error("You must specify the 'firewallName' input.");
        }
        const action = core.getInput("actionToDo");
        if (action != "add" && action != "remove") {
            throw new Error(`The input 'actionToDo' must one of these values: 'add' or 'remove'. Current value: '${action}'`);
        }
        const port = parseInt(core.getInput("port"));
        if (core.getInput("port").length == 0 || port <= 0) {
            throw new Error("The input 'port' must be a number greater than 0.");
        }
        const protocol = core.getInput("protocol");
        if (protocol != "tcp" && protocol != "udp") {
            throw new Error(`The input 'protocol' must be 'tcp' or 'udp'. Current value: ${protocol}`);
        }
        const dryrun = core.getInput("dryRun") == "true";
        // TODO: try/catch for getting the IP
        const IP = yield getLocalIP();
        return {
            DO_TOKEN: token,
            firewallName,
            action,
            IP,
            port,
            protocol,
            dryrun
        };
    });
}
exports.getConfig = getConfig;
// TODO: remove the export here and test the full configuration
function getLocalIP() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield node_fetch_1.default("https://ifconfig.me/ip");
        return response.text();
    });
}
exports.getLocalIP = getLocalIP;


/***/ }),
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(559), exports);
__exportStar(__webpack_require__(71), exports);
__exportStar(__webpack_require__(422), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 168 */,
/* 169 */,
/* 170 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLoadBalancer = void 0;
exports.updateLoadBalancer = ({ httpClient, }) => ({ algorithm, droplet_ids, enable_proxy_protocol, forwarding_rules, health_check, load_balancer_id, name, redirect_http_to_https, region, sticky_sessions, tag, vpc_uuid, }) => {
    const path = '/load_balancers';
    const body = {
        algorithm,
        droplet_ids,
        enable_proxy_protocol,
        forwarding_rules,
        health_check,
        name,
        redirect_http_to_https,
        region,
        sticky_sessions,
        tag,
        vpc_uuid,
    };
    const url = `${path}/${load_balancer_id}`;
    return httpClient.put(url, body);
};
//# sourceMappingURL=update-load-balancer.js.map

/***/ }),
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getKubernetesCluster = void 0;
exports.getKubernetesCluster = ({ httpClient, }) => ({ kubernetes_cluster_id, }) => {
    const path = '/kubernetes/clusters';
    const url = `${path}/${kubernetes_cluster_id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-kubernetes-cluster.js.map

/***/ }),
/* 181 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listVolumeSnapshots = void 0;
exports.listVolumeSnapshots = ({ httpClient, }) => ({ id, page = 1, per_page = 25, volume_id, }) => {
    const path = '/volumes';
    const queryParams = { page, per_page };
    const url = `${path}/${volume_id || id}/snapshots`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-volume-snapshots.js.map

/***/ }),
/* 182 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listConnectionPools = void 0;
exports.listConnectionPools = ({ httpClient, }) => ({ page = 1, per_page = 25, database_cluster_id, }) => {
    const path = '/databases';
    const queryParams = { page, per_page };
    const url = `${path}/${database_cluster_id}/pools`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-connection-pools.js.map

/***/ }),
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=certificate.js.map

/***/ }),
/* 192 */,
/* 193 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.addDropletsToLoadBalancer = void 0;
exports.addDropletsToLoadBalancer = ({ httpClient, }) => ({ droplet_ids, id, load_balancer_id, }) => {
    const path = '/load_balancers';
    const body = {
        droplet_ids,
    };
    const url = `${path}/${load_balancer_id || id}/droplets`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=add-droplets-to-load-balancer.js.map

/***/ }),
/* 194 */,
/* 195 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listDatabaseClusterUsers = void 0;
exports.listDatabaseClusterUsers = ({ httpClient, }) => ({ page = 1, per_page = 25, database_cluster_id, }) => {
    const path = '/databases';
    const queryParams = { page, per_page };
    const url = `${path}/${database_cluster_id}/users`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-database-cluster-users.js.map

/***/ }),
/* 196 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resetDropletPassword = void 0;
exports.resetDropletPassword = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'password_reset';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=reset-droplet-password.js.map

/***/ }),
/* 197 */,
/* 198 */,
/* 199 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(815);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createCertificate = void 0;
exports.createCertificate = ({ httpClient, }) => ({ certificate_chain, dns_names, leaf_certificate, name, private_key, type, }) => {
    const path = '/certificates';
    const body = {
        certificate_chain,
        dns_names,
        leaf_certificate,
        name,
        private_key,
        type,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-certificate.js.map

/***/ }),
/* 205 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listInvoices = void 0;
exports.listInvoices = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/customers/my/invoices';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-invoices.js.map

/***/ }),
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDefaultProject = void 0;
exports.updateDefaultProject = ({ httpClient, }) => ({ description, environment, is_default, name, purpose, }) => {
    const path = '/projects';
    const body = {
        description,
        environment,
        is_default,
        name,
        purpose,
    };
    const url = `${path}/default`;
    return httpClient.put(url, body);
};
//# sourceMappingURL=update-default-project.js.map

/***/ }),
/* 210 */,
/* 211 */
/***/ (function(module) {

module.exports = require("https");

/***/ }),
/* 212 */,
/* 213 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listDropletActions = void 0;
exports.listDropletActions = ({ httpClient, }) => ({ droplet_id, page = 1, per_page = 25, }) => {
    const path = '/droplets';
    const queryParams = { page, per_page };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.get(url, {
        params: queryParams,
    });
};
//# sourceMappingURL=list-droplet-actions.js.map

/***/ }),
/* 214 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNodePool = void 0;
exports.updateNodePool = ({ httpClient, }) => ({ auto_scale, count, kubernetes_cluster_id, labels, max_nodes, min_nodes, name, node_pool_id, tags, }) => {
    const path = '/kubernetes/clusters';
    const body = {
        auto_scale,
        count,
        labels,
        max_nodes,
        min_nodes,
        name,
        tags,
    };
    const url = `${path}/${kubernetes_cluster_id}/node_pools/${node_pool_id}`;
    return httpClient.put(url, body);
};
//# sourceMappingURL=update-node-pool.js.map

/***/ }),
/* 215 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCdnEndpoint = void 0;
exports.deleteCdnEndpoint = ({ httpClient, }) => ({ cdn_endpoint_id, }) => {
    const path = '/cdn/endpoints';
    const url = `${path}/${cdn_endpoint_id}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-cdn-endpoint.js.map

/***/ }),
/* 216 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(753), exports);
__exportStar(__webpack_require__(388), exports);
__exportStar(__webpack_require__(508), exports);
__exportStar(__webpack_require__(227), exports);
__exportStar(__webpack_require__(446), exports);
__exportStar(__webpack_require__(101), exports);
__exportStar(__webpack_require__(573), exports);
__exportStar(__webpack_require__(225), exports);
__exportStar(__webpack_require__(181), exports);
__exportStar(__webpack_require__(736), exports);
__exportStar(__webpack_require__(331), exports);
__exportStar(__webpack_require__(120), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 217 */,
/* 218 */,
/* 219 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteConnectionPool = void 0;
exports.deleteConnectionPool = ({ httpClient, }) => ({ database_cluster_id, pool_name, }) => {
    const path = '/databases';
    const url = `${path}/${database_cluster_id}/pools/${pool_name}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-connection-pool.js.map

/***/ }),
/* 220 */,
/* 221 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(681), exports);
__exportStar(__webpack_require__(877), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 222 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(147), exports);
__exportStar(__webpack_require__(3), exports);
__exportStar(__webpack_require__(492), exports);
__exportStar(__webpack_require__(484), exports);
__exportStar(__webpack_require__(855), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 223 */,
/* 224 */,
/* 225 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listVolumeActions = void 0;
exports.listVolumeActions = ({ httpClient, }) => ({ id, page = 1, per_page = 25, volume_id, }) => {
    const path = '/volumes';
    const queryParams = { page, per_page };
    const url = `${path}/${volume_id || id}/actions`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-volume-actions.js.map

/***/ }),
/* 226 */,
/* 227 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVolume = void 0;
exports.deleteVolume = ({ httpClient, }) => ({ id, volume_id, }) => {
    const path = '/volumes';
    const url = `${path}/${volume_id || id}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-volume.js.map

/***/ }),
/* 228 */,
/* 229 */,
/* 230 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rebuildDroplet = void 0;
exports.rebuildDroplet = ({ httpClient, }) => ({ droplet_id, image, }) => {
    const path = '/droplets';
    const type = 'rebuild';
    const body = { image, type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=rebuild-droplet.js.map

/***/ }),
/* 231 */,
/* 232 */,
/* 233 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.configureDatabaseClusterEvictionPolicy = void 0;
exports.configureDatabaseClusterEvictionPolicy = ({ httpClient, }) => ({ database_cluster_id, eviction_policy, }) => {
    const path = '/databases';
    const body = { eviction_policy };
    const url = `${path}/${database_cluster_id}/eviction_policy`;
    return httpClient.put(url, body);
};
//# sourceMappingURL=configure-database-cluster-eviction-policy.js.map

/***/ }),
/* 234 */,
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(110);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),
/* 236 */,
/* 237 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(447), exports);
__exportStar(__webpack_require__(629), exports);
__exportStar(__webpack_require__(611), exports);
__exportStar(__webpack_require__(765), exports);
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(205), exports);
__exportStar(__webpack_require__(659), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 238 */,
/* 239 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDatabaseClusterDb = void 0;
exports.deleteDatabaseClusterDb = ({ httpClient, }) => ({ database_cluster_id, db_name, }) => {
    const path = '/databases';
    const url = `${path}/${database_cluster_id}/dbs/${db_name}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-database-cluster-db.js.map

/***/ }),
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";

const os = __webpack_require__(87);
const tty = __webpack_require__(867);
const hasFlag = __webpack_require__(364);

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if ('GITHUB_ACTIONS' in env) {
		return 1;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty.isatty(1))),
	stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};


/***/ }),
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=vpc.js.map

/***/ }),
/* 254 */,
/* 255 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseClusterSqlMode = void 0;
exports.getDatabaseClusterSqlMode = ({ httpClient, }) => ({ database_cluster_id, }) => {
    const path = '/databases';
    const url = `${path}/${database_cluster_id}/sql_mode`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-database-cluster-sql-mode.js.map

/***/ }),
/* 256 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDroplet = void 0;
exports.getDroplet = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const url = `${path}/${droplet_id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-droplet.js.map

/***/ }),
/* 257 */,
/* 258 */,
/* 259 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listDatabaseClusterFirewallRules = void 0;
exports.listDatabaseClusterFirewallRules = ({ httpClient, }) => ({ page = 1, per_page = 25, database_cluster_id, }) => {
    const path = '/databases';
    const queryParams = { page, per_page };
    const url = `${path}/${database_cluster_id}/firewall`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-database-cluster-firewall-rules.js.map

/***/ }),
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.addDropletsToFirewall = void 0;
exports.addDropletsToFirewall = ({ httpClient, }) => ({ droplet_ids, firewall_id, }) => {
    const path = '/firewalls';
    const body = {
        droplet_ids,
    };
    const url = `${path}/${firewall_id}/droplets`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=add-droplets-to-firewall.js.map

/***/ }),
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=database-cluster-db.js.map

/***/ }),
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listFloatingIps = void 0;
exports.listFloatingIps = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/floating_ips';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-floating-ips.js.map

/***/ }),
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.shutdownDroplet = void 0;
exports.shutdownDroplet = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'shutdown';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=shutdown-droplet.js.map

/***/ }),
/* 283 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(815);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 284 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVpc = void 0;
exports.deleteVpc = ({ httpClient, }) => ({ vpc_id, }) => {
    const path = '/vpcs';
    const url = `${path}/${vpc_id}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-vpc.js.map

/***/ }),
/* 285 */,
/* 286 */,
/* 287 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=database-cluster-firewall-rule-type.js.map

/***/ }),
/* 288 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=action.js.map

/***/ }),
/* 289 */,
/* 290 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(815);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 291 */,
/* 292 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomImage = void 0;
exports.createCustomImage = ({ httpClient, }) => ({ description, distribution, name, region, tags, url, }) => {
    const path = '/images';
    const _url = `${path}`;
    const body = {
        description,
        distribution,
        name,
        region,
        tags,
        url,
    };
    return httpClient.post(_url, body);
};
//# sourceMappingURL=create-custom-image.js.map

/***/ }),
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=project-resource.js.map

/***/ }),
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listDomains = void 0;
exports.listDomains = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/domains';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-domains.js.map

/***/ }),
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.unassignIpFromDroplet = void 0;
exports.unassignIpFromDroplet = ({ httpClient, }) => ({ ip, }) => {
    const path = '/floating_ips';
    const type = 'unassign';
    const body = { type };
    const url = `${path}/${ip}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=unassign-ip-from-droplet.js.map

/***/ }),
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=invoice.js.map

/***/ }),
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getVpc = void 0;
exports.getVpc = ({ httpClient, }) => ({ vpc_id, }) => {
    const path = '/vpcs';
    const url = `${path}/${vpc_id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-vpc.js.map

/***/ }),
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=database-cluster-mysql-user-settings.js.map

/***/ }),
/* 331 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeVolume = void 0;
exports.resizeVolume = ({ httpClient, }) => ({ id, region, size_gigabytes, volume_id, }) => {
    const path = '/volumes';
    const type = 'resize';
    const body = { region, size_gigabytes, type };
    const url = `${path}/${volume_id || id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=resize-volume.js.map

/***/ }),
/* 332 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.transferImage = void 0;
exports.transferImage = ({ httpClient, }) => ({ image_id, region, }) => {
    const path = '/images';
    const url = `${path}/${image_id}/actions`;
    const body = { type: 'transfer', region };
    return httpClient.post(url, body);
};
//# sourceMappingURL=transfer-image.js.map

/***/ }),
/* 333 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(815);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 334 */,
/* 335 */,
/* 336 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(633), exports);
__exportStar(__webpack_require__(435), exports);
__exportStar(__webpack_require__(918), exports);
__exportStar(__webpack_require__(577), exports);
__exportStar(__webpack_require__(60), exports);
__exportStar(__webpack_require__(94), exports);
__exportStar(__webpack_require__(429), exports);
__exportStar(__webpack_require__(342), exports);
__exportStar(__webpack_require__(180), exports);
__exportStar(__webpack_require__(56), exports);
__exportStar(__webpack_require__(387), exports);
__exportStar(__webpack_require__(895), exports);
__exportStar(__webpack_require__(524), exports);
__exportStar(__webpack_require__(790), exports);
__exportStar(__webpack_require__(496), exports);
__exportStar(__webpack_require__(412), exports);
__exportStar(__webpack_require__(116), exports);
__exportStar(__webpack_require__(214), exports);
__exportStar(__webpack_require__(591), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 337 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listProjectResources = void 0;
exports.listProjectResources = ({ httpClient, }) => ({ page = 1, per_page = 25, project_id, }) => {
    const path = '/projects';
    const queryParams = { page, per_page };
    const url = `${path}/${project_id}/resources`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-project-resources.js.map

/***/ }),
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getKubernetesClusterKubeconfig = void 0;
exports.getKubernetesClusterKubeconfig = ({ httpClient, }) => ({ kubernetes_cluster_id, expiration_in_seconds, }) => {
    const path = '/kubernetes/clusters';
    const queryParams = { expiry_seconds: expiration_in_seconds };
    const url = `${path}/${kubernetes_cluster_id}/kubeconfig`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=get-kubernetes-cluster-kubeconfig.js.map

/***/ }),
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoadBalancer = void 0;
exports.getLoadBalancer = ({ httpClient, }) => ({ id, load_balancer_id, }) => {
    const path = '/load_balancers';
    const url = `${path}/${load_balancer_id || id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-load-balancer.js.map

/***/ }),
/* 350 */,
/* 351 */,
/* 352 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(815);
var bind = __webpack_require__(727);
var Axios = __webpack_require__(779);
var mergeConfig = __webpack_require__(825);
var defaults = __webpack_require__(529);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(826);
axios.CancelToken = __webpack_require__(527);
axios.isCancel = __webpack_require__(871);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(879);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 353 */,
/* 354 */,
/* 355 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getImage = void 0;
exports.getImage = ({ httpClient, }) => ({ image_id, slug, }) => {
    const path = '/images';
    const url = `${path}/${image_id || slug}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-image.js.map

/***/ }),
/* 356 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=floating-ip.js.map

/***/ }),
/* 357 */
/***/ (function(module) {

module.exports = require("assert");

/***/ }),
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.disableDropletBackups = void 0;
exports.disableDropletBackups = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'disable_backups';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=disable-droplet-backups.js.map

/***/ }),
/* 362 */,
/* 363 */,
/* 364 */
/***/ (function(module) {

"use strict";


module.exports = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


/***/ }),
/* 365 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(253), exports);
__exportStar(__webpack_require__(423), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */
/***/ (function(module) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 370 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listDropletBackups = void 0;
exports.listDropletBackups = ({ httpClient, }) => ({ droplet_id, page = 1, per_page = 25, }) => {
    const path = '/droplets';
    const queryParams = { page, per_page };
    const url = `${path}/${droplet_id}/backups`;
    return httpClient.get(url, {
        params: queryParams,
    });
};
//# sourceMappingURL=list-droplet-backups.js.map

/***/ }),
/* 371 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(204), exports);
__exportStar(__webpack_require__(777), exports);
__exportStar(__webpack_require__(745), exports);
__exportStar(__webpack_require__(402), exports);
__exportStar(__webpack_require__(859), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(724), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 380 */,
/* 381 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDomain = void 0;
exports.deleteDomain = ({ httpClient, }) => ({ name, }) => {
    const path = '/domains';
    const url = `${path}/${name}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-domain.js.map

/***/ }),
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyReadOnlyReplica = void 0;
exports.destroyReadOnlyReplica = ({ httpClient, }) => ({ database_cluster_id, read_only_replica_name, }) => {
    const path = '/databases';
    const url = `${path}/${database_cluster_id}/replicas/${read_only_replica_name}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=destroy-read-only-replica.js.map

/***/ }),
/* 386 */,
/* 387 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listAvailableOptionsOfKubernetes = void 0;
exports.listAvailableOptionsOfKubernetes = ({ httpClient, }) => () => {
    const path = '/kubernetes/options';
    const url = `${path}`;
    return httpClient.get(url);
};
//# sourceMappingURL=list-available-options-of-kubernetes.js.map

/***/ }),
/* 388 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createVolumeSnapshot = void 0;
exports.createVolumeSnapshot = ({ httpClient, }) => ({ id, name, tags, volume_id, }) => {
    const path = '/volumes';
    const body = { name, tags };
    const url = `${path}/${volume_id || id}/snapshots`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-volume-snapshot.js.map

/***/ }),
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.powerOnDroplet = void 0;
exports.powerOnDroplet = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'power_on';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=power-on-droplet.js.map

/***/ }),
/* 398 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=region.js.map

/***/ }),
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listCertificates = void 0;
exports.listCertificates = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/certificates';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-certificates.js.map

/***/ }),
/* 403 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeDroplet = void 0;
exports.resizeDroplet = ({ httpClient, }) => ({ disk, droplet_id, size, }) => {
    const path = '/droplets';
    const type = 'resize';
    const body = { disk, size, type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=resize-droplet.js.map

/***/ }),
/* 404 */,
/* 405 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.doActionByDropletTag = void 0;
exports.doActionByDropletTag = ({ httpClient, }) => ({ tag_name, type, }) => {
    const path = '/droplets/actions';
    const queryParams = { tag_name };
    const body = { type };
    const url = `${path}`;
    return httpClient.post(url, body, {
        params: queryParams,
    });
};
//# sourceMappingURL=do-action-by-droplet-tag.js.map

/***/ }),
/* 406 */,
/* 407 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(902), exports);
__exportStar(__webpack_require__(154), exports);
__exportStar(__webpack_require__(469), exports);
__exportStar(__webpack_require__(269), exports);
__exportStar(__webpack_require__(734), exports);
__exportStar(__webpack_require__(950), exports);
__exportStar(__webpack_require__(287), exports);
__exportStar(__webpack_require__(506), exports);
__exportStar(__webpack_require__(330), exports);
__exportStar(__webpack_require__(820), exports);
__exportStar(__webpack_require__(709), exports);
__exportStar(__webpack_require__(113), exports);
__exportStar(__webpack_require__(54), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 408 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiClient = void 0;
const axios_1 = __importDefault(__webpack_require__(53));
exports.createApiClient = ({ createContext, modules, }) => ({ endpoint, requestTimeoutInMs, token, }) => {
    const context = createContext({
        axios: axios_1.default,
        endpoint,
        requestTimeoutInMs,
        token,
    });
    const _options = Object.freeze({
        endpoint,
        requestTimeoutInMs,
    });
    const account = Object.freeze({
        getAccount: modules.account.getAccount(context),
    });
    const action = Object.freeze({
        getAction: modules.action.getAction(context),
        listActions: modules.action.listActions(context),
    });
    const certificate = Object.freeze({
        listCertificates: modules.certificate.listCertificates(context),
        getCertificate: modules.certificate.getCertificate(context),
        deleteCertificate: modules.certificate.deleteCertificate(context),
        createCertificate: modules.certificate.createCertificate(context),
    });
    const domain = Object.freeze({
        createDomain: modules.domain.createDomain(context),
        createDomainRecord: modules.domain.createDomainRecord(context),
        deleteDomain: modules.domain.deleteDomain(context),
        deleteDomainRecord: modules.domain.deleteDomainRecord(context),
        getDomain: modules.domain.getDomain(context),
        getDomainRecord: modules.domain.getDomainRecord(context),
        listDomainRecords: modules.domain.listDomainRecords(context),
        listDomains: modules.domain.listDomains(context),
        updateDomainRecord: modules.domain.updateDomainRecord(context),
    });
    const droplet = Object.freeze({
        changeDropletKernel: modules.droplet.changeDropletKernel(context),
        createDroplet: modules.droplet.createDroplet(context),
        createDroplets: modules.droplet.createDroplets(context),
        deleteDroplet: modules.droplet.deleteDroplet(context),
        deleteDropletsByTag: modules.droplet.deleteDropletsByTag(context),
        disableDropletBackups: modules.droplet.disableDropletBackups(context),
        doActionByDropletTag: modules.droplet.doActionByDropletTag(context),
        enableDropletBackups: modules.droplet.enableDropletBackups(context),
        enableDropletIpv6: modules.droplet.enableDropletIpv6(context),
        enableDropletPrivateNetworking: modules.droplet.enableDropletPrivateNetworking(context),
        getDroplet: modules.droplet.getDroplet(context),
        getDropletAction: modules.droplet.getDropletAction(context),
        listDropletActions: modules.droplet.listDropletActions(context),
        listDropletBackups: modules.droplet.listDropletBackups(context),
        listDropletKernels: modules.droplet.listDropletKernels(context),
        listDropletNeighborhoods: modules.droplet.listDropletNeighborhoods(context),
        listDropletNeighbors: modules.droplet.listDropletNeighbors(context),
        listDroplets: modules.droplet.listDroplets(context),
        listDropletSnapshots: modules.droplet.listDropletSnapshots(context),
        powerCycleDroplet: modules.droplet.powerCycleDroplet(context),
        powerOffDroplet: modules.droplet.powerOffDroplet(context),
        powerOnDroplet: modules.droplet.powerOnDroplet(context),
        rebootDroplet: modules.droplet.rebootDroplet(context),
        rebuildDroplet: modules.droplet.rebuildDroplet(context),
        renameDroplet: modules.droplet.renameDroplet(context),
        resetDropletPassword: modules.droplet.resetDropletPassword(context),
        resizeDroplet: modules.droplet.resizeDroplet(context),
        restoreDroplet: modules.droplet.restoreDroplet(context),
        shutdownDroplet: modules.droplet.shutdownDroplet(context),
        snapshotDroplet: modules.droplet.snapshotDroplet(context),
    });
    const firewall = Object.freeze({
        addDropletsToFirewall: modules.firewall.addDropletsToFirewall(context),
        addRulesToFirewall: modules.firewall.addRulesToFirewall(context),
        addTagsToFirewall: modules.firewall.addTagsToFirewall(context),
        createFirewall: modules.firewall.createFirewall(context),
        deleteFirewall: modules.firewall.deleteFirewall(context),
        getFirewall: modules.firewall.getFirewall(context),
        listFirewalls: modules.firewall.listFirewalls(context),
        removeDropletsFromFirewall: modules.firewall.removeDropletsFromFirewall(context),
        removeRulesFromFirewall: modules.firewall.removeRulesFromFirewall(context),
        removeTagsFromFirewall: modules.firewall.removeTagsFromFirewall(context),
        updateFirewall: modules.firewall.updateFirewall(context),
    });
    const floatingIp = Object.freeze({
        assignIpToDroplet: modules.floatingIp.assignIpToDroplet(context),
        createFloatingIp: modules.floatingIp.createFloatingIp(context),
        deleteFloatingIp: modules.floatingIp.deleteFloatingIp(context),
        getFloatingIp: modules.floatingIp.getFloatingIp(context),
        getFloatingIpAction: modules.floatingIp.getFloatingIpAction(context),
        listFloatingIpActions: modules.floatingIp.listFloatingIpActions(context),
        listFloatingIps: modules.floatingIp.listFloatingIps(context),
        unassignIpFromDroplet: modules.floatingIp.unassignIpFromDroplet(context),
    });
    const image = Object.freeze({
        convertImageToSnapshot: modules.image.convertImageToSnapshot(context),
        createCustomImage: modules.image.createCustomImage(context),
        deleteImage: modules.image.deleteImage(context),
        getImageAction: modules.image.getImageAction(context),
        getImage: modules.image.getImage(context),
        listImageActions: modules.image.listImageActions(context),
        listImages: modules.image.listImages(context),
        transferImage: modules.image.transferImage(context),
        updateImage: modules.image.updateImage(context),
    });
    const loadBalancer = Object.freeze({
        addDropletsToLoadBalancer: modules.loadBalancer.addDropletsToLoadBalancer(context),
        addRulesToLoadBalancer: modules.loadBalancer.addRulesToLoadBalancer(context),
        createLoadBalancer: modules.loadBalancer.createLoadBalancer(context),
        deleteLoadBalancer: modules.loadBalancer.deleteLoadBalancer(context),
        getLoadBalancer: modules.loadBalancer.getLoadBalancer(context),
        listLoadBalancers: modules.loadBalancer.listLoadBalancers(context),
        removeDropletsFromLoadBalancer: modules.loadBalancer.removeDropletsFromLoadBalancer(context),
        removeRulesFromLoadBalancer: modules.loadBalancer.removeRulesFromLoadBalancer(context),
        updateLoadBalancer: modules.loadBalancer.updateLoadBalancer(context),
    });
    const region = Object.freeze({
        listRegions: modules.region.listRegions(context),
    });
    const size = Object.freeze({
        listSizes: modules.size.listSizes(context),
    });
    const snapshot = Object.freeze({
        deleteSnapshot: modules.snapshot.deleteSnapshot(context),
        getSnapshot: modules.snapshot.getSnapshot(context),
        listSnapshots: modules.snapshot.listSnapshots(context),
    });
    const sshKey = Object.freeze({
        createSshKey: modules.sshKey.createSshKey(context),
        destroySshKey: modules.sshKey.destroySshKey(context),
        getSshKey: modules.sshKey.getSshKey(context),
        listSshKeys: modules.sshKey.listSshKeys(context),
        updateSshKey: modules.sshKey.updateSshKey(context),
    });
    const tag = Object.freeze({
        createTag: modules.tag.createTag(context),
        deleteTag: modules.tag.deleteTag(context),
        getTag: modules.tag.getTag(context),
        listTags: modules.tag.listTags(context),
        tagResources: modules.tag.tagResources(context),
        untagResources: modules.tag.untagResources(context),
    });
    const volume = Object.freeze({
        attachVolumeToDroplet: modules.volume.attachVolumeToDroplet(context),
        createVolumeSnapshot: modules.volume.createVolumeSnapshot(context),
        createVolume: modules.volume.createVolume(context),
        deleteVolume: modules.volume.deleteVolume(context),
        detachVolumeFromDroplet: modules.volume.detachVolumeFromDroplet(context),
        getVolumeAction: modules.volume.getVolumeAction(context),
        getVolume: modules.volume.getVolume(context),
        listVolumeActions: modules.volume.listVolumeActions(context),
        listVolumeSnapshots: modules.volume.listVolumeSnapshots(context),
        listVolumes: modules.volume.listVolumes(context),
        resizeVolume: modules.volume.resizeVolume(context),
    });
    const database = Object.freeze({
        configureDatabaseClusterEvictionPolicy: modules.database.configureDatabaseClusterEvictionPolicy(context),
        configureDatabaseClusterMaintenanceWindow: modules.database.configureDatabaseClusterMaintenanceWindow(context),
        configureDatabaseClusterSqlModes: modules.database.configureDatabaseClusterSqlModes(context),
        createConnectionPool: modules.database.createConnectionPool(context),
        createDatabaseCluster: modules.database.createDatabaseCluster(context),
        createDatabaseClusterDb: modules.database.createDatabaseClusterDb(context),
        createDatabaseClusterUser: modules.database.createDatabaseClusterUser(context),
        createReadOnlyReplica: modules.database.createReadOnlyReplica(context),
        deleteConnectionPool: modules.database.deleteConnectionPool(context),
        deleteDatabaseClusterDb: modules.database.deleteDatabaseClusterDb(context),
        destroyDatabaseCluster: modules.database.destroyDatabaseCluster(context),
        destroyReadOnlyReplica: modules.database.destroyReadOnlyReplica(context),
        getConnectionPool: modules.database.getConnectionPool(context),
        getDatabaseCluster: modules.database.getDatabaseCluster(context),
        getDatabaseClusterDb: modules.database.getDatabaseClusterDb(context),
        getDatabaseClusterEvictionPolicy: modules.database.getDatabaseClusterEvictionPolicy(context),
        getDatabaseClusterSqlMode: modules.database.getDatabaseClusterSqlMode(context),
        getDatabaseClusterUser: modules.database.getDatabaseClusterUser(context),
        getReadOnlyReplica: modules.database.getReadOnlyReplica(context),
        listConnectionPools: modules.database.listConnectionPools(context),
        listDatabaseClusterBackups: modules.database.listDatabaseClusterBackups(context),
        listDatabaseClusterDbs: modules.database.listDatabaseClusterDbs(context),
        listDatabaseClusterFirewallRules: modules.database.listDatabaseClusterFirewallRules(context),
        listDatabaseClusters: modules.database.listDatabaseClusters(context),
        listDatabaseClusterUsers: modules.database.listDatabaseClusterUsers(context),
        listReadOnlyReplicas: modules.database.listReadOnlyReplicas(context),
        migrateDatabaseCluster: modules.database.migrateDatabaseCluster(context),
        removeDatabaseClusterUser: modules.database.removeDatabaseClusterUser(context),
        resizeDatabaseCluster: modules.database.resizeDatabaseCluster(context),
        restoreDatabaseClusterBackup: modules.database.restoreDatabaseClusterBackup(context),
        updateDatabaseClusterFirewallRules: modules.database.updateDatabaseClusterFirewallRules(context),
    });
    const project = Object.freeze({
        assignResourcesToDefaultProject: modules.project.assignResourcesToDefaultProject(context),
        assignResourcesToProject: modules.project.assignResourcesToProject(context),
        createProject: modules.project.createProject(context),
        deleteProject: modules.project.deleteProject(context),
        getDefaultProject: modules.project.getDefaultProject(context),
        getProject: modules.project.getProject(context),
        listDefaultProjectResources: modules.project.listDefaultProjectResources(context),
        listProjectResources: modules.project.listProjectResources(context),
        listProjects: modules.project.listProjects(context),
        patchDefaultProject: modules.project.patchDefaultProject(context),
        patchProject: modules.project.patchProject(context),
        updateDefaultProject: modules.project.updateDefaultProject(context),
        updateProject: modules.project.updateProject(context),
    });
    const kubernetes = Object.freeze({
        createKubernetesCluster: modules.kubernetes.createKubernetesCluster(context),
        createNodePool: modules.kubernetes.createNodePool(context),
        deleteKubernetesCluster: modules.kubernetes.deleteKubernetesCluster(context),
        deleteNode: modules.kubernetes.deleteNode(context),
        deleteNodePool: modules.kubernetes.deleteNodePool(context),
        getClusterlintDiagnostics: modules.kubernetes.getClusterlintDiagnostics(context),
        getKubernetesCluster: modules.kubernetes.getKubernetesCluster(context),
        getKubernetesClusterCredentials: modules.kubernetes.getKubernetesClusterCredentials(context),
        getKubernetesClusterKubeconfig: modules.kubernetes.getKubernetesClusterKubeconfig(context),
        getNodePool: modules.kubernetes.getNodePool(context),
        listAvailableOptionsOfKubernetes: modules.kubernetes.listAvailableOptionsOfKubernetes(context),
        listKubernetesClusterAvailableUpgrades: modules.kubernetes.listKubernetesClusterAvailableUpgrades(context),
        listKubernetesClusters: modules.kubernetes.listKubernetesClusters(context),
        listNodePools: modules.kubernetes.listNodePools(context),
        runClusterlintOnKubernetesCluster: modules.kubernetes.runClusterlintOnKubernetesCluster(context),
        updateKubernetesCluster: modules.kubernetes.updateKubernetesCluster(context),
        updateNodePool: modules.kubernetes.updateNodePool(context),
        upgradeKubernetesCluster: modules.kubernetes.upgradeKubernetesCluster(context),
    });
    const cdnEndpoint = Object.freeze({
        createCdnEndpoint: modules.cdnEndpoint.createCdnEndpoint(context),
        getCdnEndpoint: modules.cdnEndpoint.getCdnEndpoint(context),
        listCdnEndpoints: modules.cdnEndpoint.listCdnEndpoints(context),
        deleteCdnEndpoint: modules.cdnEndpoint.deleteCdnEndpoint(context),
        updateCdnEndpoint: modules.cdnEndpoint.updateCdnEndpoint(context),
        purgeCache: modules.cdnEndpoint.purgeCache(context),
    });
    const containerRegistry = Object.freeze({
        configureRegistry: modules.containerRegistry.configureRegistry(context),
        deleteRegistry: modules.containerRegistry.deleteRegistry(context),
        getDockerCredentials: modules.containerRegistry.getDockerCredentials(context),
        getRegistry: modules.containerRegistry.getRegistry(context),
    });
    const customer = Object.freeze({
        downloadInvoice: modules.customer.downloadInvoice(context),
        getBalance: modules.customer.getBalance(context),
        getInvoiceSummary: modules.customer.getInvoiceSummary(context),
        listBillingHistory: modules.customer.listBillingHistory(context),
        listInvoiceItems: modules.customer.listInvoiceItems(context),
        listInvoices: modules.customer.listInvoices(context),
    });
    const vpc = Object.freeze({
        createVpc: modules.vpc.createVpc(context),
        deleteVpc: modules.vpc.deleteVpc(context),
        getVpc: modules.vpc.getVpc(context),
        listVpcResources: modules.vpc.listVpcResources(context),
        listVpcs: modules.vpc.listVpcs(context),
        updateVpc: modules.vpc.updateVpc(context),
    });
    return Object.freeze({
        _options,
        account,
        action,
        cdnEndpoint,
        certificate,
        containerRegistry,
        customer,
        database,
        domain,
        droplet,
        firewall,
        floatingIp,
        image,
        kubernetes,
        loadBalancer,
        project,
        region,
        size,
        snapshot,
        sshKey,
        tag,
        volume,
        vpc,
    });
};
//# sourceMappingURL=create-api-client.js.map

/***/ }),
/* 409 */,
/* 410 */,
/* 411 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(815);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 412 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(452), exports);
__exportStar(__webpack_require__(459), exports);
__exportStar(__webpack_require__(482), exports);
__exportStar(__webpack_require__(156), exports);
__exportStar(__webpack_require__(733), exports);
__exportStar(__webpack_require__(569), exports);
__exportStar(__webpack_require__(419), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 413 */
/***/ (function(module) {

module.exports = require("stream");

/***/ }),
/* 414 */,
/* 415 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(150), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 416 */,
/* 417 */,
/* 418 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listVpcResources = void 0;
exports.listVpcResources = ({ httpClient, }) => ({ page = 1, per_page = 25, resource_type, vpc_id, }) => {
    const path = '/vpcs';
    const queryParams = { page, per_page, resource_type };
    const url = `${path}/${vpc_id}/members`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-vpc-resources.js.map

/***/ }),
/* 419 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=kubernetes-cluster.js.map

/***/ }),
/* 420 */,
/* 421 */,
/* 422 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(288), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 423 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=vpc-resource.js.map

/***/ }),
/* 424 */,
/* 425 */,
/* 426 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=account.js.map

/***/ }),
/* 427 */,
/* 428 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.enableDropletBackups = void 0;
exports.enableDropletBackups = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'enable_backups';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=enable-droplet-backups.js.map

/***/ }),
/* 429 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getKubernetesClusterCredentials = void 0;
exports.getKubernetesClusterCredentials = ({ httpClient, }) => ({ kubernetes_cluster_id, expiration_in_seconds, }) => {
    const path = '/kubernetes/clusters';
    const queryParams = { expiry_seconds: expiration_in_seconds };
    const url = `${path}/${kubernetes_cluster_id}/credentials`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=get-kubernetes-cluster-credentials.js.map

/***/ }),
/* 430 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.patchProject = void 0;
exports.patchProject = ({ httpClient, }) => ({ description, environment, is_default, name, project_id, purpose, }) => {
    const path = '/projects';
    const body = {
        description,
        environment,
        is_default,
        name,
        purpose,
    };
    const url = `${path}/${project_id}`;
    return httpClient.patch(url, body);
};
//# sourceMappingURL=patch-project.js.map

/***/ }),
/* 431 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const os = __importStar(__webpack_require__(87));
const utils_1 = __webpack_require__(82);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createNodePool = void 0;
exports.createNodePool = ({ httpClient, }) => ({ auto_scale, count, kubernetes_cluster_id, labels, max_nodes, min_nodes, name, size, tags, }) => {
    const path = '/kubernetes/clusters';
    const body = {
        auto_scale,
        count,
        labels,
        max_nodes,
        min_nodes,
        name,
        size,
        tags,
    };
    const url = `${path}/${kubernetes_cluster_id}/node_pools`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-node-pool.js.map

/***/ }),
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=tag-resources.js.map

/***/ }),
/* 445 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listRegions = void 0;
exports.listRegions = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/regions';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-regions.js.map

/***/ }),
/* 446 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.detachVolumeFromDroplet = void 0;
exports.detachVolumeFromDroplet = ({ httpClient, }) => ({ droplet_id, id, region, volume_id, }) => {
    const path = '/volumes';
    const type = 'detach';
    const body = { droplet_id, region, type };
    const url = `${path}/${volume_id || id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=detach-volume-from-droplet.js.map

/***/ }),
/* 447 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadInvoice = void 0;
exports.downloadInvoice = ({ httpClient, }) => ({ invoice_uuid, format, }) => {
    const path = '/customers/my/invoices';
    const url = `${path}/${invoice_uuid}/${format}`;
    return httpClient.get(url, {
        responseType: 'stream',
    });
};
//# sourceMappingURL=download-invoice.js.map

/***/ }),
/* 448 */,
/* 449 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(118), exports);
__exportStar(__webpack_require__(215), exports);
__exportStar(__webpack_require__(104), exports);
__exportStar(__webpack_require__(848), exports);
__exportStar(__webpack_require__(973), exports);
__exportStar(__webpack_require__(415), exports);
__exportStar(__webpack_require__(513), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 450 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printFirewallRules = exports.updateInboundRules = exports.generateInboundRules = exports.getFirewall = exports.getDOClient = void 0;
const dots_wrapper_1 = __webpack_require__(507);
function getDOClient(config) {
    return dots_wrapper_1.createApiClient({ token: config.DO_TOKEN });
}
exports.getDOClient = getDOClient;
function getFirewall({ firewall: firewallClient }, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data: { firewalls } } = yield firewallClient.listFirewalls({});
        const firewall = firewalls.find(f => f.name == name);
        if (firewall == undefined) {
            throw new Error(`The firewall with name '${name}', doesn't exist.`);
        }
        return firewall;
    });
}
exports.getFirewall = getFirewall;
function generateInboundRules(oldRules, config) {
    const { port, action, protocol, IP } = config;
    return oldRules.map(rule => {
        var _a;
        const cloneRule = Object.assign({}, rule);
        if (rule.ports == port.toString() && rule.protocol == protocol) {
            const addresses = (_a = cloneRule.sources.addresses) !== null && _a !== void 0 ? _a : [];
            if (action == "add") {
                addresses.push(IP);
            }
            else if (action == "remove") {
                cloneRule.sources.addresses = addresses.filter(address => address != IP);
            }
        }
        return cloneRule;
    });
}
exports.generateInboundRules = generateInboundRules;
function updateInboundRules({ firewall: firewallClient }, firewall, inboundRules, dryrun = true) {
    return __awaiter(this, void 0, void 0, function* () {
        printFirewallRules(inboundRules, "(updated)");
        if (dryrun) {
            return;
        }
        const updated = {
            id: firewall.id,
            name: firewall.name,
            inbound_rules: inboundRules,
            outbound_rules: prepareOutboundRules(firewall.outbound_rules)
        };
        const { data: { firewall: response } } = yield firewallClient.updateFirewall(updated);
        console.log(response.status);
    });
}
exports.updateInboundRules = updateInboundRules;
function printFirewallRules(inboundRules, title = "") {
    console.log("----------------------");
    console.log(`Firewall Inbound Rules ${title}`);
    console.log("----------------------");
    inboundRules.forEach(rule => {
        console.log(`${rule.ports}::${rule.protocol} - ${rule.sources.addresses}`);
    });
}
exports.printFirewallRules = printFirewallRules;
function prepareOutboundRules(outboundRules) {
    return outboundRules.map(rule => {
        const clonedRule = Object.assign({}, rule);
        if (clonedRule.ports == "0") {
            clonedRule.ports = "all";
        }
        return clonedRule;
    });
}


/***/ }),
/* 451 */,
/* 452 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=kubernetes-cluster-maintenance-policy.js.map

/***/ }),
/* 453 */,
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Stream = _interopDefault(__webpack_require__(413));
var http = _interopDefault(__webpack_require__(605));
var Url = _interopDefault(__webpack_require__(835));
var https = _interopDefault(__webpack_require__(211));
var zlib = _interopDefault(__webpack_require__(761));

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = __webpack_require__(18).convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

module.exports = exports = fetch;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports.FetchError = FetchError;


/***/ }),
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=kubernetes-cluster-node-pool-labels.js.map

/***/ }),
/* 460 */,
/* 461 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getFloatingIp = void 0;
exports.getFloatingIp = ({ httpClient, }) => ({ ip, }) => {
    const path = '/floating_ips';
    const url = `${path}/${ip}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-floating-ip.js.map

/***/ }),
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(832), exports);
__exportStar(__webpack_require__(658), exports);
__exportStar(__webpack_require__(887), exports);
__exportStar(__webpack_require__(915), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 466 */,
/* 467 */,
/* 468 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.destroySshKey = void 0;
exports.destroySshKey = ({ httpClient, }) => ({ id, ssh_key_id, }) => {
    const path = '/account/keys';
    const url = `${path}/${ssh_key_id || id}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=destroy-ssh-key.js.map

/***/ }),
/* 469 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=database-cluster-connection.js.map

/***/ }),
/* 470 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = __webpack_require__(431);
const file_command_1 = __webpack_require__(102);
const utils_1 = __webpack_require__(82);
const os = __importStar(__webpack_require__(87));
const path = __importStar(__webpack_require__(622));
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.  The value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 */
function error(message) {
    command_1.issue('error', message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds an warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 */
function warning(message) {
    command_1.issue('warning', message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
//# sourceMappingURL=core.js.map

/***/ }),
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=container-registry.js.map

/***/ }),
/* 479 */,
/* 480 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.configureDatabaseClusterMaintenanceWindow = void 0;
exports.configureDatabaseClusterMaintenanceWindow = ({ httpClient, }) => ({ database_cluster_id, day, hour, }) => {
    const path = '/databases';
    const body = { day, hour };
    const url = `${path}/${database_cluster_id}/maintenance`;
    return httpClient.put(url, body);
};
//# sourceMappingURL=configure-database-cluster-maintenance-window.js.map

/***/ }),
/* 481 */,
/* 482 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=kubernetes-cluster-node-pool-node-status.js.map

/***/ }),
/* 483 */,
/* 484 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegistry = void 0;
exports.getRegistry = ({ httpClient, }) => () => {
    const path = '/registry';
    const url = `${path}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-registry.js.map

/***/ }),
/* 485 */,
/* 486 */,
/* 487 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertImageToSnapshot = void 0;
exports.convertImageToSnapshot = ({ httpClient, }) => ({ image_id, }) => {
    const path = '/images';
    const url = `${path}/${image_id}/actions`;
    const body = { type: 'convert' };
    return httpClient.post(url, body);
};
//# sourceMappingURL=convert-image-to-snapshot.js.map

/***/ }),
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.removeRulesFromFirewall = void 0;
exports.removeRulesFromFirewall = ({ httpClient, }) => ({ firewall_id, inbound_rules, outbound_rules, }) => {
    const path = '/firewalls';
    const body = { inbound_rules, outbound_rules };
    const url = `${path}/${firewall_id}/rules`;
    return httpClient.delete(url, { data: body });
};
//# sourceMappingURL=remove-rules-from-firewall.js.map

/***/ }),
/* 492 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDockerCredentials = void 0;
exports.getDockerCredentials = ({ httpClient, }) => ({ can_write = false, }) => {
    const path = '/registry/docker-credentials';
    const queryParams = { read_write: can_write };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=get-docker-credentials.js.map

/***/ }),
/* 493 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listLoadBalancers = void 0;
exports.listLoadBalancers = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/load_balancers';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-load-balancers.js.map

/***/ }),
/* 494 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createDomainRecord = void 0;
exports.createDomainRecord = ({ httpClient, }) => ({ domain_name, data, flags, name, port, priority, tag, ttl, type, weight, }) => {
    const path = '/domains';
    const body = {
        data,
        flags,
        name,
        port,
        priority,
        tag,
        ttl,
        type,
        weight,
    };
    const url = `${path}/${domain_name}/records`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-domain-record.js.map

/***/ }),
/* 495 */,
/* 496 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.runClusterlintOnKubernetesCluster = void 0;
exports.runClusterlintOnKubernetesCluster = ({ httpClient, }) => ({ kubernetes_cluster_id, include_groups, include_checks, exclude_groups, exclude_checks, }) => {
    const path = '/kubernetes/clusters';
    const body = {
        include_groups,
        include_checks,
        exclude_groups,
        exclude_checks,
    };
    const url = `${path}/${kubernetes_cluster_id}/clusterlint`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=run-clusterlint-on-kubernetes-cluster.js.map

/***/ }),
/* 497 */,
/* 498 */,
/* 499 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(815);
var settle = __webpack_require__(564);
var buildURL = __webpack_require__(133);
var buildFullPath = __webpack_require__(960);
var parseHeaders = __webpack_require__(333);
var isURLSameOrigin = __webpack_require__(290);
var createError = __webpack_require__(851);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(199);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeDatabaseCluster = void 0;
exports.resizeDatabaseCluster = ({ httpClient, }) => ({ database_cluster_id, num_nodes, size, }) => {
    const path = '/databases';
    const body = {
        num_nodes,
        size,
    };
    const url = `${path}/${database_cluster_id}/resize`;
    return httpClient.put(url, body);
};
//# sourceMappingURL=resize-database-cluster.js.map

/***/ }),
/* 506 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=database-cluster-maintenance-window.js.map

/***/ }),
/* 507 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = exports.modules = exports.createApiClient = void 0;
const modules = __importStar(__webpack_require__(17));
exports.modules = modules;
const _utils = __importStar(__webpack_require__(774));
const createApiClient = _utils.createApiClient({
    modules,
    createContext: _utils.createContext,
});
exports.createApiClient = createApiClient;
const utils = {
    createApiClient,
    createContext: _utils.createContext,
};
exports.utils = utils;
//# sourceMappingURL=index.js.map

/***/ }),
/* 508 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createVolume = void 0;
exports.createVolume = ({ httpClient, }) => ({ description, filesystem_label, filesystem_type, name, region, size_gigabytes, snapshot_id, tags, }) => {
    const path = '/volumes';
    const body = {
        description,
        filesystem_label,
        filesystem_type,
        name,
        region,
        size_gigabytes,
        snapshot_id,
        tags,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-volume.js.map

/***/ }),
/* 509 */,
/* 510 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSshKey = void 0;
exports.updateSshKey = ({ httpClient, }) => ({ id, name, ssh_key_id, }) => {
    const path = '/account/keys';
    const body = {
        name,
    };
    const url = `${path}/${ssh_key_id || id}`;
    return httpClient.put(url, body);
};
//# sourceMappingURL=update-ssh-key.js.map

/***/ }),
/* 511 */,
/* 512 */,
/* 513 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCdnEndpoint = void 0;
exports.updateCdnEndpoint = ({ httpClient, }) => ({ cdn_endpoint_id, ttl, certificate_id, custom_domain, }) => {
    const path = '/cdn/endpoints';
    const body = {
        ttl,
        certificate_id,
        custom_domain,
    };
    const url = `${path}/${cdn_endpoint_id}`;
    return httpClient.put(url, body);
};
//# sourceMappingURL=update-cdn-endpoint.js.map

/***/ }),
/* 514 */,
/* 515 */,
/* 516 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listDropletNeighbors = void 0;
exports.listDropletNeighbors = ({ httpClient, }) => ({ droplet_id, page = 1, per_page = 25, }) => {
    const path = '/droplets';
    const queryParams = { page, per_page };
    const url = `${path}/${droplet_id}/neighbors`;
    return httpClient.get(url, {
        params: queryParams,
    });
};
//# sourceMappingURL=list-droplet-neighbors.js.map

/***/ }),
/* 517 */,
/* 518 */,
/* 519 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultProject = void 0;
exports.getDefaultProject = ({ httpClient, }) => () => {
    const path = '/projects';
    const url = `${path}/default`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-default-project.js.map

/***/ }),
/* 520 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(928), exports);
__exportStar(__webpack_require__(892), exports);
__exportStar(__webpack_require__(838), exports);
__exportStar(__webpack_require__(119), exports);
__exportStar(__webpack_require__(640), exports);
__exportStar(__webpack_require__(138), exports);
__exportStar(__webpack_require__(980), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 521 */,
/* 522 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createDatabaseCluster = void 0;
exports.createDatabaseCluster = ({ httpClient, }) => ({ engine, name, num_nodes, private_network_uuid, region, size, tags, version, }) => {
    const path = '/databases';
    const body = {
        engine,
        name,
        num_nodes,
        private_network_uuid,
        region,
        size,
        tags,
        version,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-database-cluster.js.map

/***/ }),
/* 523 */,
/* 524 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listKubernetesClusters = void 0;
exports.listKubernetesClusters = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/kubernetes/clusters';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-kubernetes-clusters.js.map

/***/ }),
/* 525 */,
/* 526 */,
/* 527 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(826);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 528 */,
/* 529 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(815);
var normalizeHeaderName = __webpack_require__(411);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(499);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(670);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),
/* 530 */,
/* 531 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=size.js.map

/***/ }),
/* 532 */,
/* 533 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFloatingIp = void 0;
exports.deleteFloatingIp = ({ httpClient, }) => ({ ip, }) => {
    const path = '/floating_ips';
    const url = `${path}/${ip}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-floating-ip.js.map

/***/ }),
/* 534 */,
/* 535 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=invoice-item.js.map

/***/ }),
/* 536 */,
/* 537 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateImage = void 0;
exports.updateImage = ({ httpClient, }) => ({ description, distribution, image_id, name, }) => {
    const path = '/images';
    const url = `${path}/${image_id}`;
    const body = { description, distribution, name };
    return httpClient.post(url, body);
};
//# sourceMappingURL=update-image.js.map

/***/ }),
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */
/***/ (function(module, __unusedexports, __webpack_require__) {

var url = __webpack_require__(835);
var http = __webpack_require__(605);
var https = __webpack_require__(211);
var assert = __webpack_require__(357);
var Writable = __webpack_require__(413).Writable;
var debug = __webpack_require__(72)("follow-redirects");

// RFC7231§4.2.1: Of the request methods defined by this specification,
// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.
var SAFE_METHODS = { GET: true, HEAD: true, OPTIONS: true, TRACE: true };

// Create handlers that pass events from native requests
var eventHandlers = Object.create(null);
["abort", "aborted", "error", "socket", "timeout"].forEach(function (event) {
  eventHandlers[event] = function (arg) {
    this._redirectable.emit(event, arg);
  };
});

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  options.headers = options.headers || {};
  this._options = options;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Validate input and shift parameters if necessary
  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    throw new Error("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new Error("Request body larger than maxBodyLength limit"));
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (typeof data === "function") {
    callback = data;
    data = encoding = null;
  }
  else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Write data and end
  var currentRequest = this._currentRequest;
  this.write(data || "", encoding, function () {
    currentRequest.end(null, null, callback);
  });
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Proxy all other public ClientRequest methods
[
  "abort", "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive", "setTimeout",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new Error("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url.format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var event in eventHandlers) {
    /* istanbul ignore else */
    if (event) {
      request.on(event, eventHandlers[event]);
    }
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var i = 0;
    var buffers = this._requestBodyBuffers;
    (function writeNext() {
      if (i < buffers.length) {
        var buffer = buffers[i++];
        request.write(buffer.data, buffer.encoding, writeNext);
      }
      else {
        request.end();
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: response.statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.
  var location = response.headers.location;
  if (location && this._options.followRedirects !== false &&
      response.statusCode >= 300 && response.statusCode < 400) {
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new Error("Max redirects exceeded."));
      return;
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe […],
    // since the user might not wish to redirect an unsafe request.
    // RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
    // that the target resource resides temporarily under a different URI
    // and the user agent MUST NOT change the request method
    // if it performs an automatic redirection to that URI.
    var header;
    var headers = this._options.headers;
    if (response.statusCode !== 307 && !(this._options.method in SAFE_METHODS)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      for (header in headers) {
        if (/^content-/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Drop the Host header, as the redirect might lead to a different host
    if (!this._isRedirect) {
      for (header in headers) {
        if (/^host$/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Perform the redirected request
    var redirectUrl = url.resolve(this._currentUrl, location);
    debug("redirecting to", redirectUrl);
    Object.assign(this._options, url.parse(redirectUrl));
    this._isRedirect = true;
    this._performRequest();

    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
  }
  else {
    // The response is not a redirect; return it as-is
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    wrappedProtocol.request = function (options, callback) {
      if (typeof options === "string") {
        options = url.parse(options);
        options.maxRedirects = exports.maxRedirects;
      }
      else {
        options = Object.assign({
          protocol: protocol,
          maxRedirects: exports.maxRedirects,
          maxBodyLength: exports.maxBodyLength,
        }, options);
      }
      options.nativeProtocols = nativeProtocols;
      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    };

    // Executes a GET request, following redirects
    wrappedProtocol.get = function (options, callback) {
      var request = wrappedProtocol.request(options, callback);
      request.end();
      return request;
    };
  });
  return exports;
}

// Exports
module.exports = wrap({ http: http, https: https });
module.exports.wrap = wrap;


/***/ }),
/* 550 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.assignResourcesToDefaultProject = void 0;
exports.assignResourcesToDefaultProject = ({ httpClient, }) => ({ resources, }) => {
    const path = '/projects';
    const body = { resources };
    const url = `${path}/default/resources`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=assign-resources-to-default-project.js.map

/***/ }),
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=load-balancer.js.map

/***/ }),
/* 559 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getAction = void 0;
exports.getAction = ({ httpClient, }) => ({ action_id, }) => {
    const path = '/action';
    const url = `${path}/${action_id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-action.js.map

/***/ }),
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(851);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 565 */,
/* 566 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(233), exports);
__exportStar(__webpack_require__(480), exports);
__exportStar(__webpack_require__(949), exports);
__exportStar(__webpack_require__(708), exports);
__exportStar(__webpack_require__(916), exports);
__exportStar(__webpack_require__(824), exports);
__exportStar(__webpack_require__(522), exports);
__exportStar(__webpack_require__(85), exports);
__exportStar(__webpack_require__(219), exports);
__exportStar(__webpack_require__(239), exports);
__exportStar(__webpack_require__(861), exports);
__exportStar(__webpack_require__(385), exports);
__exportStar(__webpack_require__(68), exports);
__exportStar(__webpack_require__(584), exports);
__exportStar(__webpack_require__(69), exports);
__exportStar(__webpack_require__(255), exports);
__exportStar(__webpack_require__(679), exports);
__exportStar(__webpack_require__(615), exports);
__exportStar(__webpack_require__(882), exports);
__exportStar(__webpack_require__(182), exports);
__exportStar(__webpack_require__(689), exports);
__exportStar(__webpack_require__(50), exports);
__exportStar(__webpack_require__(259), exports);
__exportStar(__webpack_require__(195), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(743), exports);
__exportStar(__webpack_require__(621), exports);
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(505), exports);
__exportStar(__webpack_require__(874), exports);
__exportStar(__webpack_require__(407), exports);
__exportStar(__webpack_require__(714), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 567 */,
/* 568 */,
/* 569 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=kubernetes-cluster-status.js.map

/***/ }),
/* 570 */,
/* 571 */,
/* 572 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listDroplets = void 0;
exports.listDroplets = ({ httpClient, }) => ({ page = 1, per_page = 25, tag_name, }) => {
    const path = '/droplets';
    const queryParams = { page, per_page };
    const hasTagnameFilter = typeof tag_name === 'string';
    if (hasTagnameFilter)
        Object.assign(queryParams, { tag_name });
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-droplets.js.map

/***/ }),
/* 573 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getVolume = void 0;
exports.getVolume = ({ httpClient, }) => ({ id, volume_id, }) => {
    const path = '/volumes';
    const url = `${path}/${volume_id || id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-volume.js.map

/***/ }),
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNodePool = void 0;
exports.deleteNodePool = ({ httpClient, }) => ({ kubernetes_cluster_id, node_pool_id, }) => {
    const path = '/kubernetes/clusters';
    const url = `${path}/${kubernetes_cluster_id}/node_pools/${node_pool_id}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-node-pool.js.map

/***/ }),
/* 578 */,
/* 579 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.changeDropletKernel = void 0;
exports.changeDropletKernel = ({ httpClient, }) => ({ droplet_id, kernel, }) => {
    const path = '/droplets';
    const type = 'change_kernel';
    const body = { kernel, type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=change-droplet-kernel.js.map

/***/ }),
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseClusterDb = void 0;
exports.getDatabaseClusterDb = ({ httpClient, }) => ({ database_cluster_id, db_name, }) => {
    const path = '/databases';
    const url = `${path}/${database_cluster_id}/dbs/${db_name}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-database-cluster-db.js.map

/***/ }),
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(815);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 590 */
/***/ (function(module) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 591 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.upgradeKubernetesCluster = void 0;
exports.upgradeKubernetesCluster = ({ httpClient, }) => ({ kubernetes_cluster_id, version, }) => {
    const path = '/kubernetes/clusters';
    const body = { version };
    const url = `${path}/${kubernetes_cluster_id}/upgrade`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=upgrade-kubernetes-cluster.js.map

/***/ }),
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listVpcs = void 0;
exports.listVpcs = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/vpcs';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-vpcs.js.map

/***/ }),
/* 603 */,
/* 604 */,
/* 605 */
/***/ (function(module) {

module.exports = require("http");

/***/ }),
/* 606 */,
/* 607 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=tag-resource.js.map

/***/ }),
/* 608 */,
/* 609 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(550), exports);
__exportStar(__webpack_require__(986), exports);
__exportStar(__webpack_require__(674), exports);
__exportStar(__webpack_require__(732), exports);
__exportStar(__webpack_require__(519), exports);
__exportStar(__webpack_require__(999), exports);
__exportStar(__webpack_require__(721), exports);
__exportStar(__webpack_require__(337), exports);
__exportStar(__webpack_require__(937), exports);
__exportStar(__webpack_require__(4), exports);
__exportStar(__webpack_require__(430), exports);
__exportStar(__webpack_require__(112), exports);
__exportStar(__webpack_require__(209), exports);
__exportStar(__webpack_require__(62), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 610 */,
/* 611 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvoiceSummary = void 0;
exports.getInvoiceSummary = ({ httpClient, }) => ({ invoice_uuid, }) => {
    const path = '/customers/my/invoices';
    const url = `${path}/${invoice_uuid}/summary`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-invoice-summary.js.map

/***/ }),
/* 612 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=project-resource-status.js.map

/***/ }),
/* 613 */,
/* 614 */,
/* 615 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseCluster = void 0;
exports.getDatabaseCluster = ({ httpClient, }) => ({ database_cluster_id, }) => {
    const path = '/databases';
    const url = `${path}/${database_cluster_id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-database-cluster.js.map

/***/ }),
/* 616 */,
/* 617 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createDroplet = void 0;
exports.createDroplet = ({ httpClient, }) => ({ backups, image, ipv6, monitoring, name, private_networking, region, size, ssh_keys, tags, user_data, volumes, vpc_uuid, }) => {
    const path = '/droplets';
    const body = {
        backups,
        image,
        ipv6,
        monitoring,
        name,
        private_networking,
        region,
        size,
        ssh_keys,
        tags,
        user_data,
        volumes,
        vpc_uuid,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-droplet.js.map

/***/ }),
/* 618 */,
/* 619 */,
/* 620 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(917), exports);
__exportStar(__webpack_require__(114), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 621 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.migrateDatabaseCluster = void 0;
exports.migrateDatabaseCluster = ({ httpClient, }) => ({ database_cluster_id, region, }) => {
    const path = '/databases';
    const body = { region };
    const url = `${path}/${database_cluster_id}/migrate`;
    return httpClient.put(url, body);
};
//# sourceMappingURL=migrate-database-cluster.js.map

/***/ }),
/* 622 */
/***/ (function(module) {

module.exports = require("path");

/***/ }),
/* 623 */,
/* 624 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFirewall = void 0;
exports.updateFirewall = ({ httpClient, }) => ({ droplet_ids, id, inbound_rules, name, outbound_rules, tags, }) => {
    const path = '/firewalls';
    const body = {
        droplet_ids,
        inbound_rules,
        name,
        outbound_rules,
        tags,
    };
    const url = `${path}/${id}`;
    return httpClient.put(url, body);
};
//# sourceMappingURL=update-firewall.js.map

/***/ }),
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = void 0;
exports.getBalance = ({ httpClient, }) => () => {
    const path = '/customers/my/balance';
    const url = `${path}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-balance.js.map

/***/ }),
/* 630 */,
/* 631 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSnapshot = void 0;
exports.deleteSnapshot = ({ httpClient, }) => ({ id, snapshot_id, }) => {
    const path = '/snapshots';
    const url = `${path}/${snapshot_id || id}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-snapshot.js.map

/***/ }),
/* 632 */
/***/ (function(module) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 633 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createKubernetesCluster = void 0;
exports.createKubernetesCluster = ({ httpClient, }) => ({ name, region, version, tags, auto_upgrade, maintenance_policy, node_pools, vpc_uuid, }) => {
    const path = '/kubernetes/clusters';
    const body = {
        name,
        region,
        version,
        tags,
        auto_upgrade,
        maintenance_policy,
        node_pools,
        vpc_uuid,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-kubernetes-cluster.js.map

/***/ }),
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listDropletSnapshots = void 0;
exports.listDropletSnapshots = ({ httpClient, }) => ({ droplet_id, page = 1, per_page = 25, }) => {
    const path = '/droplets';
    const queryParams = { page, per_page };
    const url = `${path}/${droplet_id}/snapshots`;
    return httpClient.get(url, {
        params: queryParams,
    });
};
//# sourceMappingURL=list-droplet-snapshots.js.map

/***/ }),
/* 639 */,
/* 640 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tagResources = void 0;
exports.tagResources = ({ httpClient, }) => ({ tag_name, resources, }) => {
    const path = '/tags';
    const body = { resources };
    const url = `${path}/${tag_name}/resources`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=tag-resources.js.map

/***/ }),
/* 641 */,
/* 642 */,
/* 643 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=domain-record.js.map

/***/ }),
/* 644 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getFloatingIpAction = void 0;
exports.getFloatingIpAction = ({ httpClient, }) => ({ action_id, ip, }) => {
    const path = '/floating_ips';
    const url = `${path}/${ip}/actions/${action_id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-floating-ip-action.js.map

/***/ }),
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVpc = void 0;
exports.updateVpc = ({ httpClient, }) => ({ description, name, vpc_id, }) => {
    const path = '/vpcs';
    const body = {
        description,
        name,
    };
    const url = `${path}/${vpc_id}`;
    return httpClient.patch(url, body);
};
//# sourceMappingURL=update-vpc.js.map

/***/ }),
/* 658 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=kernel.js.map

/***/ }),
/* 659 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(846), exports);
__exportStar(__webpack_require__(996), exports);
__exportStar(__webpack_require__(535), exports);
__exportStar(__webpack_require__(802), exports);
__exportStar(__webpack_require__(64), exports);
__exportStar(__webpack_require__(317), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.enableDropletIpv6 = void 0;
exports.enableDropletIpv6 = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'enable_ipv6';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=enable-droplet-ipv6.js.map

/***/ }),
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createFloatingIp = void 0;
exports.createFloatingIp = ({ httpClient, }) => (body) => {
    const path = '/floating_ips';
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-floating-ip.js.map

/***/ }),
/* 668 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.addTagsToFirewall = void 0;
exports.addTagsToFirewall = ({ httpClient, }) => ({ firewall_id, tags, }) => {
    const path = '/firewalls';
    const body = { tags };
    const url = `${path}/${firewall_id}/tags`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=add-tags-to-firewall.js.map

/***/ }),
/* 669 */
/***/ (function(module) {

module.exports = require("util");

/***/ }),
/* 670 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(815);
var settle = __webpack_require__(564);
var buildFullPath = __webpack_require__(960);
var buildURL = __webpack_require__(133);
var http = __webpack_require__(605);
var https = __webpack_require__(211);
var httpFollow = __webpack_require__(549).http;
var httpsFollow = __webpack_require__(549).https;
var url = __webpack_require__(835);
var zlib = __webpack_require__(761);
var pkg = __webpack_require__(771);
var createError = __webpack_require__(851);
var enhanceError = __webpack_require__(369);

var isHttps = /https:?/;

/*eslint consistent-return:0*/
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var resolve = function resolve(value) {
      resolvePromise(value);
    };
    var reject = function reject(value) {
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/axios/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) {
        // Nothing to do...
      } else if (utils.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url.parse(fullPath);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    var options = {
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;

        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });

          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' &&
                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }

            return parsed.hostname === proxyElement;
          });
        }


        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port
          };

          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }

    if (proxy) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      options.port = proxy.port;
      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

      // Basic proxy authorization
      if (proxy.auth) {
        var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
      }
    }

    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }

    if (config.maxContentLength && config.maxContentLength > -1) {
      options.maxBodyLength = config.maxContentLength;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;
      switch (res.headers['content-encoding']) {
      /*eslint default-case:0*/
      case 'gzip':
      case 'compress':
      case 'deflate':
        // add the unzipper to the body stream processing pipeline
        stream = (res.statusCode === 204) ? stream : stream.pipe(zlib.createUnzip());

        // remove the content-encoding in order to not confuse downstream operations
        delete res.headers['content-encoding'];
        break;
      }

      // return the last request in case of redirects
      var lastRequest = res.req || req;

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            stream.destroy();
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString(config.responseEncoding);
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted) return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout) {
      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(config.timeout, function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
      });
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(enhanceError(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};


/***/ }),
/* 671 */,
/* 672 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=firewall.js.map

/***/ }),
/* 673 */,
/* 674 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = void 0;
exports.createProject = ({ httpClient, }) => ({ name, description, purpose, environment, }) => {
    const path = '/projects';
    const body = {
        name,
        description,
        purpose,
        environment,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-project.js.map

/***/ }),
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=firewall-rule.js.map

/***/ }),
/* 679 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseClusterUser = void 0;
exports.getDatabaseClusterUser = ({ httpClient, }) => ({ database_cluster_id, user_name, }) => {
    const path = '/databases';
    const url = `${path}/${database_cluster_id}/users/${user_name}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-database-cluster-user.js.map

/***/ }),
/* 680 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.enableDropletPrivateNetworking = void 0;
exports.enableDropletPrivateNetworking = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'enable_private_networking';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=enable-droplet-private-networking.js.map

/***/ }),
/* 681 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccount = void 0;
exports.getAccount = ({ httpClient, }) => () => {
    const path = '/account';
    const url = `${path}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-account.js.map

/***/ }),
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createSshKey = void 0;
exports.createSshKey = ({ httpClient, }) => ({ name, public_key, }) => {
    const path = '/account/keys';
    const body = {
        name,
        public_key,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-ssh-key.js.map

/***/ }),
/* 689 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listDatabaseClusterBackups = void 0;
exports.listDatabaseClusterBackups = ({ httpClient, }) => ({ page = 1, per_page = 25, database_cluster_id, }) => {
    const path = '/databases';
    const queryParams = { page, per_page };
    const url = `${path}/${database_cluster_id}/backups`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-database-cluster-backups.js.map

/***/ }),
/* 690 */,
/* 691 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDropletsByTag = void 0;
exports.deleteDropletsByTag = ({ httpClient, }) => ({ tag_name, }) => {
    const path = '/droplets';
    const queryParams = { tag_name };
    const url = `${path}`;
    return httpClient.delete(url, { params: queryParams });
};
//# sourceMappingURL=delete-droplets-by-tag.js.map

/***/ }),
/* 692 */,
/* 693 */,
/* 694 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(865), exports);
__exportStar(__webpack_require__(667), exports);
__exportStar(__webpack_require__(533), exports);
__exportStar(__webpack_require__(644), exports);
__exportStar(__webpack_require__(461), exports);
__exportStar(__webpack_require__(99), exports);
__exportStar(__webpack_require__(273), exports);
__exportStar(__webpack_require__(311), exports);
__exportStar(__webpack_require__(73), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnectionPool = void 0;
exports.createConnectionPool = ({ httpClient, }) => ({ database_cluster_id, db_name, mode, pool_name, size, user_name, }) => {
    const path = '/databases';
    const body = {
        db: db_name,
        mode,
        name: pool_name,
        size,
        user: user_name,
    };
    const url = `${path}/${database_cluster_id}/pools`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-connection-pool.js.map

/***/ }),
/* 709 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=database-cluster-status.js.map

/***/ }),
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=firewall-inbound-rule.js.map

/***/ }),
/* 714 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDatabaseClusterFirewallRules = void 0;
exports.updateDatabaseClusterFirewallRules = ({ httpClient, }) => ({ database_cluster_id, rules, }) => {
    const path = '/databases';
    const body = { rules };
    const url = `${path}/${database_cluster_id}/firewall`;
    return httpClient.put(url, body);
};
//# sourceMappingURL=update-database-cluster-firewall-rules.js.map

/***/ }),
/* 715 */,
/* 716 */,
/* 717 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createFirewall = void 0;
exports.createFirewall = ({ httpClient, }) => ({ droplet_ids, inbound_rules, name, outbound_rules, tags, }) => {
    const path = '/firewalls';
    const body = {
        droplet_ids,
        inbound_rules,
        name,
        outbound_rules,
        tags,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-firewall.js.map

/***/ }),
/* 718 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createDroplets = void 0;
exports.createDroplets = ({ httpClient, }) => ({ backups, image, ipv6, monitoring, names, private_networking, region, size, ssh_keys, tags, user_data, volumes, vpc_uuid, }) => {
    const path = '/droplets';
    const body = {
        backups,
        image,
        ipv6,
        monitoring,
        names,
        private_networking,
        region,
        size,
        ssh_keys,
        tags,
        user_data,
        volumes,
        vpc_uuid,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-droplets.js.map

/***/ }),
/* 719 */,
/* 720 */,
/* 721 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listDefaultProjectResources = void 0;
exports.listDefaultProjectResources = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/projects';
    const queryParams = { page, per_page };
    const url = `${path}/default/resources`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-default-project-resources.js.map

/***/ }),
/* 722 */,
/* 723 */,
/* 724 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=image.js.map

/***/ }),
/* 725 */,
/* 726 */,
/* 727 */
/***/ (function(module) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 728 */,
/* 729 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
exports.createContext = ({ axios, requestTimeoutInMs = 1000 * 15, endpoint = 'https://api.digitalocean.com/v2', token, }) => {
    const { freeze } = Object;
    const headers = freeze({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    });
    const axiosConfig = freeze({
        baseURL: endpoint,
        headers,
        timeout: requestTimeoutInMs,
    });
    const httpClient = axios.create(axiosConfig);
    return freeze({ endpoint, httpClient });
};
//# sourceMappingURL=create-context.js.map

/***/ }),
/* 730 */,
/* 731 */,
/* 732 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = void 0;
exports.deleteProject = ({ httpClient, }) => ({ project_id, }) => {
    const path = '/projects';
    const url = `${path}/${project_id}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-project.js.map

/***/ }),
/* 733 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=kubernetes-cluster-node-pool.js.map

/***/ }),
/* 734 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=database-cluster-engine.js.map

/***/ }),
/* 735 */,
/* 736 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listVolumes = void 0;
exports.listVolumes = ({ httpClient, }) => ({ name, page = 1, per_page = 25, }) => {
    const path = '/volumes';
    const queryParams = { page, per_page };
    const hasNameFilter = typeof name === 'string';
    if (hasNameFilter)
        Object.assign(queryParams, { name });
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-volumes.js.map

/***/ }),
/* 737 */,
/* 738 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__(867);
var util = __webpack_require__(669);

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(110);
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [ 6, 2, 3, 4, 5, 1 ];

try {
  var supportsColor = __webpack_require__(247);
  if (supportsColor && supportsColor.level >= 2) {
    exports.colors = [
      20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68,
      69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134,
      135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171,
      172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204,
      205, 206, 207, 208, 209, 214, 215, 220, 221
    ];
  }
} catch (err) {
  // swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(process.stderr.fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var colorCode = '\u001b[3' + (c < 8 ? c : '8;5;' + c);
    var prefix = '  ' + colorCode + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push(colorCode + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = getDate() + name + ' ' + args[0];
  }
}

function getDate() {
  if (exports.inspectOpts.hideDate) {
    return '';
  } else {
    return new Date().toISOString() + ' ';
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log() {
  return process.stderr.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());


/***/ }),
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listReadOnlyReplicas = void 0;
exports.listReadOnlyReplicas = ({ httpClient, }) => ({ page = 1, per_page = 25, database_cluster_id, }) => {
    const path = '/databases';
    const queryParams = { page, per_page };
    const url = `${path}/${database_cluster_id}/replicas`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-read-only-replicas.js.map

/***/ }),
/* 744 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(487), exports);
__exportStar(__webpack_require__(292), exports);
__exportStar(__webpack_require__(760), exports);
__exportStar(__webpack_require__(776), exports);
__exportStar(__webpack_require__(355), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(78), exports);
__exportStar(__webpack_require__(332), exports);
__exportStar(__webpack_require__(537), exports);
__exportStar(__webpack_require__(379), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 745 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCertificate = void 0;
exports.getCertificate = ({ httpClient, }) => ({ certificate_id, }) => {
    const path = '/certificates';
    const url = `${path}/${certificate_id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-certificate.js.map

/***/ }),
/* 746 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDomainRecord = void 0;
exports.getDomainRecord = ({ httpClient, }) => ({ domain_name, domain_record_id, }) => {
    const path = '/domains';
    const url = `${path}/${domain_name}/records/${domain_record_id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-domain-record.js.map

/***/ }),
/* 747 */
/***/ (function(module) {

module.exports = require("fs");

/***/ }),
/* 748 */,
/* 749 */,
/* 750 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listDropletNeighborhoods = void 0;
exports.listDropletNeighborhoods = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/reports/droplet_neighbors_ids';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, {
        params: queryParams,
    });
};
//# sourceMappingURL=list-droplet-neighborhoods.js.map

/***/ }),
/* 751 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=ssh-key.js.map

/***/ }),
/* 752 */,
/* 753 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.attachVolumeToDroplet = void 0;
exports.attachVolumeToDroplet = ({ httpClient, }) => ({ droplet_id, id, region, volume_id, }) => {
    const path = '/volumes';
    const type = 'attach';
    const body = { droplet_id, region, type };
    const url = `${path}/${volume_id || id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=attach-volume-to-droplet.js.map

/***/ }),
/* 754 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=domain.js.map

/***/ }),
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.addRulesToFirewall = void 0;
exports.addRulesToFirewall = ({ httpClient, }) => ({ firewall_id, inbound_rules, outbound_rules, }) => {
    const path = '/firewalls';
    const body = { inbound_rules, outbound_rules };
    const url = `${path}/${firewall_id}/rules`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=add-rules-to-firewall.js.map

/***/ }),
/* 760 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImage = void 0;
exports.deleteImage = ({ httpClient, }) => ({ image_id, }) => {
    const path = '/images';
    const url = `${path}/${image_id}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-image.js.map

/***/ }),
/* 761 */
/***/ (function(module) {

module.exports = require("zlib");

/***/ }),
/* 762 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listSnapshots = void 0;
exports.listSnapshots = ({ httpClient, }) => ({ page = 1, per_page = 25, resource_type = undefined, }) => {
    const path = '/snapshots';
    const queryParams = { page, per_page };
    const hasResourceTypeFilter = typeof resource_type === 'string';
    if (hasResourceTypeFilter) {
        Object.assign(queryParams, { resource_type });
    }
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-snapshots.js.map

/***/ }),
/* 763 */,
/* 764 */,
/* 765 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listBillingHistory = void 0;
exports.listBillingHistory = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/customers/my/billing_history';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-billing-history.js.map

/***/ }),
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */
/***/ (function(module) {

module.exports = {"name":"axios","version":"0.19.2","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test && bundlesize","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://github.com/axios/axios","devDependencies":{"bundlesize":"^0.17.0","coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.0.2","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^20.1.0","grunt-karma":"^2.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^1.3.0","karma-chrome-launcher":"^2.2.0","karma-coverage":"^1.1.1","karma-firefox-launcher":"^1.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.2.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^5.2.0","sinon":"^4.5.0","typescript":"^2.8.1","url-search-params":"^0.10.0","webpack":"^1.13.1","webpack-dev-server":"^1.14.1"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"typings":"./index.d.ts","dependencies":{"follow-redirects":"1.5.10"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}],"_resolved":"https://registry.npmjs.org/axios/-/axios-0.19.2.tgz","_integrity":"sha512-fjgm5MvRHLhx+osE2xoekY70AhARk3a6hkN+3Io1jc00jtquGvxYlKlsFUhmUET0V5te6CcZI7lcv2Ym61mjHA==","_from":"axios@0.19.2"};

/***/ }),
/* 772 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(815);
var transformData = __webpack_require__(589);
var isCancel = __webpack_require__(871);
var defaults = __webpack_require__(529);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 773 */,
/* 774 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(408), exports);
__exportStar(__webpack_require__(729), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 775 */,
/* 776 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageAction = void 0;
exports.getImageAction = ({ httpClient, }) => ({ image_id, action_id, }) => {
    const path = '/images';
    const url = `${path}/${image_id}/actions/${action_id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-image-action.js.map

/***/ }),
/* 777 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCertificate = void 0;
exports.deleteCertificate = ({ httpClient, }) => ({ certificate_id, }) => {
    const path = '/certificates';
    const url = `${path}/${certificate_id}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-certificate.js.map

/***/ }),
/* 778 */,
/* 779 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(815);
var buildURL = __webpack_require__(133);
var InterceptorManager = __webpack_require__(283);
var dispatchRequest = __webpack_require__(772);
var mergeConfig = __webpack_require__(825);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */
/***/ (function(module) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listNodePools = void 0;
exports.listNodePools = ({ httpClient, }) => ({ kubernetes_cluster_id, page = 1, per_page = 25, }) => {
    const path = '/kubernetes/clusters';
    const queryParams = { page, per_page };
    const url = `${path}/${kubernetes_cluster_id}/node_pools`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-node-pools.js.map

/***/ }),
/* 791 */,
/* 792 */,
/* 793 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=firewall-outbound-rule.js.map

/***/ }),
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=invoice-preview.js.map

/***/ }),
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=volume.js.map

/***/ }),
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(727);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 816 */,
/* 817 */,
/* 818 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=sticky-sessions.js.map

/***/ }),
/* 819 */,
/* 820 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=database-cluster-replica.js.map

/***/ }),
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createDatabaseClusterUser = void 0;
exports.createDatabaseClusterUser = ({ httpClient, }) => ({ database_cluster_id, mysql_settings, user_name, }) => {
    const path = '/databases';
    const body = { name: user_name, mysql_settings };
    const url = `${path}/${database_cluster_id}/users`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-database-cluster-user.js.map

/***/ }),
/* 825 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(815);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 826 */
/***/ (function(module) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=droplet.js.map

/***/ }),
/* 833 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDomainRecord = void 0;
exports.deleteDomainRecord = ({ httpClient, }) => ({ domain_name, domain_record_id, }) => {
    const path = '/domains';
    const url = `${path}/${domain_name}/records/${domain_record_id}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-domain-record.js.map

/***/ }),
/* 834 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.powerOffDroplet = void 0;
exports.powerOffDroplet = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'power_off';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=power-off-droplet.js.map

/***/ }),
/* 835 */
/***/ (function(module) {

module.exports = require("url");

/***/ }),
/* 836 */,
/* 837 */,
/* 838 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getTag = void 0;
exports.getTag = ({ httpClient, }) => ({ tag_name, }) => {
    const path = '/tags';
    const url = `${path}/${tag_name}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-tag.js.map

/***/ }),
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=balance.js.map

/***/ }),
/* 847 */,
/* 848 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listCdnEndpoints = void 0;
exports.listCdnEndpoints = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/cdn/endpoints';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-cdn-endpoints.js.map

/***/ }),
/* 849 */,
/* 850 */,
/* 851 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(369);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 852 */,
/* 853 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDroplet = void 0;
exports.deleteDroplet = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const url = `${path}/${droplet_id}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-droplet.js.map

/***/ }),
/* 854 */,
/* 855 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(478), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(191), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 860 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=snapshot.js.map

/***/ }),
/* 861 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyDatabaseCluster = void 0;
exports.destroyDatabaseCluster = ({ httpClient, }) => ({ database_cluster_id, }) => {
    const path = '/databases';
    const url = `${path}/${database_cluster_id}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=destroy-database-cluster.js.map

/***/ }),
/* 862 */,
/* 863 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDomainRecord = void 0;
exports.updateDomainRecord = ({ httpClient, }) => ({ data, domain_name, domain_record_id, flags, name, port, priority, tag, ttl, type, weight, }) => {
    const path = '/domains';
    const body = {
        data,
        flags,
        name,
        port,
        priority,
        tag,
        ttl,
        type,
        weight,
    };
    const url = `${path}/${domain_name}/records/${domain_record_id}`;
    return httpClient.put(url, body);
};
//# sourceMappingURL=update-domain-record.js.map

/***/ }),
/* 864 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=project.js.map

/***/ }),
/* 865 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.assignIpToDroplet = void 0;
exports.assignIpToDroplet = ({ httpClient, }) => ({ droplet_id, ip, }) => {
    const path = '/floating_ips';
    const type = 'assign';
    const body = { droplet_id, type };
    const url = `${path}/${ip}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=assign-ip-to-droplet.js.map

/***/ }),
/* 866 */,
/* 867 */
/***/ (function(module) {

module.exports = require("tty");

/***/ }),
/* 868 */,
/* 869 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.renameDroplet = void 0;
exports.renameDroplet = ({ httpClient, }) => ({ droplet_id, name, }) => {
    const path = '/droplets';
    const type = 'rename';
    const body = { name, type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=rename-droplet.js.map

/***/ }),
/* 870 */,
/* 871 */
/***/ (function(module) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 872 */,
/* 873 */,
/* 874 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreDatabaseClusterBackup = void 0;
exports.restoreDatabaseClusterBackup = ({ httpClient, }) => ({ backup_restore, engine, name, num_nodes, region, size, tags, version, }) => {
    const path = '/databases';
    const body = {
        backup_restore,
        engine,
        name,
        num_nodes,
        region,
        size,
        tags,
        version,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=restore-database-cluster-backup.js.map

/***/ }),
/* 875 */,
/* 876 */,
/* 877 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(426), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 878 */,
/* 879 */
/***/ (function(module) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 880 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDomain = void 0;
exports.getDomain = ({ httpClient, }) => ({ name, }) => {
    const path = '/domains';
    const url = `${path}/${name}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-domain.js.map

/***/ }),
/* 881 */,
/* 882 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getReadOnlyReplica = void 0;
exports.getReadOnlyReplica = ({ httpClient, }) => ({ database_cluster_id, read_only_replica_name, }) => {
    const path = '/databases';
    const url = `${path}/${database_cluster_id}/replicas/${read_only_replica_name}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-read-only-replica.js.map

/***/ }),
/* 883 */,
/* 884 */,
/* 885 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(193), exports);
__exportStar(__webpack_require__(925), exports);
__exportStar(__webpack_require__(979), exports);
__exportStar(__webpack_require__(977), exports);
__exportStar(__webpack_require__(349), exports);
__exportStar(__webpack_require__(493), exports);
__exportStar(__webpack_require__(953), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(170), exports);
__exportStar(__webpack_require__(145), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 886 */,
/* 887 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=network-interface.js.map

/***/ }),
/* 888 */,
/* 889 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listDropletKernels = void 0;
exports.listDropletKernels = ({ httpClient, }) => ({ droplet_id, page = 1, per_page = 25, }) => {
    const path = '/droplets';
    const queryParams = { page, per_page };
    const url = `${path}/${droplet_id}/kernels`;
    return httpClient.get(url, {
        params: queryParams,
    });
};
//# sourceMappingURL=list-droplet-kernels.js.map

/***/ }),
/* 890 */,
/* 891 */,
/* 892 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTag = void 0;
exports.deleteTag = ({ httpClient, }) => ({ tag_name, }) => {
    const path = '/tags';
    const url = `${path}/${tag_name}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-tag.js.map

/***/ }),
/* 893 */,
/* 894 */,
/* 895 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listKubernetesClusterAvailableUpgrades = void 0;
exports.listKubernetesClusterAvailableUpgrades = ({ httpClient, }) => ({ kubernetes_cluster_id, }) => {
    const path = '/kubernetes/clusters';
    const url = `${path}/${kubernetes_cluster_id}/upgrades`;
    return httpClient.get(url);
};
//# sourceMappingURL=list-kubernetes-cluster-available-upgrades.js.map

/***/ }),
/* 896 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirewall = void 0;
exports.getFirewall = ({ httpClient, }) => ({ firewall_id, }) => {
    const path = '/firewalls';
    const url = `${path}/${firewall_id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-firewall.js.map

/***/ }),
/* 897 */,
/* 898 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(445), exports);
__exportStar(__webpack_require__(38), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 899 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createDomain = void 0;
exports.createDomain = ({ httpClient, }) => ({ ip_address, name, }) => {
    const path = '/domains';
    const body = {
        ip_address,
        name,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-domain.js.map

/***/ }),
/* 900 */,
/* 901 */,
/* 902 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=database-cluster-connection-pool-mode.js.map

/***/ }),
/* 903 */,
/* 904 */,
/* 905 */,
/* 906 */,
/* 907 */,
/* 908 */,
/* 909 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(579), exports);
__exportStar(__webpack_require__(617), exports);
__exportStar(__webpack_require__(718), exports);
__exportStar(__webpack_require__(853), exports);
__exportStar(__webpack_require__(691), exports);
__exportStar(__webpack_require__(361), exports);
__exportStar(__webpack_require__(405), exports);
__exportStar(__webpack_require__(428), exports);
__exportStar(__webpack_require__(663), exports);
__exportStar(__webpack_require__(680), exports);
__exportStar(__webpack_require__(946), exports);
__exportStar(__webpack_require__(256), exports);
__exportStar(__webpack_require__(213), exports);
__exportStar(__webpack_require__(370), exports);
__exportStar(__webpack_require__(889), exports);
__exportStar(__webpack_require__(750), exports);
__exportStar(__webpack_require__(516), exports);
__exportStar(__webpack_require__(638), exports);
__exportStar(__webpack_require__(572), exports);
__exportStar(__webpack_require__(76), exports);
__exportStar(__webpack_require__(834), exports);
__exportStar(__webpack_require__(397), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(230), exports);
__exportStar(__webpack_require__(869), exports);
__exportStar(__webpack_require__(196), exports);
__exportStar(__webpack_require__(403), exports);
__exportStar(__webpack_require__(70), exports);
__exportStar(__webpack_require__(282), exports);
__exportStar(__webpack_require__(137), exports);
__exportStar(__webpack_require__(465), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 910 */,
/* 911 */,
/* 912 */,
/* 913 */,
/* 914 */,
/* 915 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=network.js.map

/***/ }),
/* 916 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createDatabaseClusterDb = void 0;
exports.createDatabaseClusterDb = ({ httpClient, }) => ({ database_cluster_id, db_name, }) => {
    const path = '/databases';
    const body = { name: db_name };
    const url = `${path}/${database_cluster_id}/dbs`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-database-cluster-db.js.map

/***/ }),
/* 917 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listSizes = void 0;
exports.listSizes = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/sizes';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-sizes.js.map

/***/ }),
/* 918 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteKubernetesCluster = void 0;
exports.deleteKubernetesCluster = ({ httpClient, }) => ({ kubernetes_cluster_id, }) => {
    const path = '/kubernetes/clusters';
    const url = `${path}/${kubernetes_cluster_id}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-kubernetes-cluster.js.map

/***/ }),
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */,
/* 923 */,
/* 924 */,
/* 925 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.addRulesToLoadBalancer = void 0;
exports.addRulesToLoadBalancer = ({ httpClient, }) => ({ forwarding_rules, id, load_balancer_id, }) => {
    const path = '/load_balancers';
    const body = {
        forwarding_rules,
    };
    const url = `${path}/${load_balancer_id || id}/forwarding_rules`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=add-rules-to-load-balancer.js.map

/***/ }),
/* 926 */,
/* 927 */,
/* 928 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createTag = void 0;
exports.createTag = ({ httpClient, }) => ({ name, }) => {
    const path = '/tags';
    const body = { name };
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-tag.js.map

/***/ }),
/* 929 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(265), exports);
__exportStar(__webpack_require__(759), exports);
__exportStar(__webpack_require__(668), exports);
__exportStar(__webpack_require__(717), exports);
__exportStar(__webpack_require__(995), exports);
__exportStar(__webpack_require__(995), exports);
__exportStar(__webpack_require__(896), exports);
__exportStar(__webpack_require__(997), exports);
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(491), exports);
__exportStar(__webpack_require__(994), exports);
__exportStar(__webpack_require__(624), exports);
__exportStar(__webpack_require__(157), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 930 */,
/* 931 */,
/* 932 */,
/* 933 */,
/* 934 */,
/* 935 */,
/* 936 */,
/* 937 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listProjects = void 0;
exports.listProjects = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/projects';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-projects.js.map

/***/ }),
/* 938 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(284), exports);
__exportStar(__webpack_require__(325), exports);
__exportStar(__webpack_require__(418), exports);
__exportStar(__webpack_require__(602), exports);
__exportStar(__webpack_require__(365), exports);
__exportStar(__webpack_require__(657), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 939 */,
/* 940 */,
/* 941 */,
/* 942 */,
/* 943 */,
/* 944 */,
/* 945 */,
/* 946 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDropletAction = void 0;
exports.getDropletAction = ({ httpClient, }) => ({ action_id, droplet_id, }) => {
    const path = '/droplets';
    const url = `${path}/${droplet_id}/actions/${action_id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-droplet-action.js.map

/***/ }),
/* 947 */,
/* 948 */,
/* 949 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.configureDatabaseClusterSqlModes = void 0;
exports.configureDatabaseClusterSqlModes = ({ httpClient, }) => ({ database_cluster_id, sql_mode, }) => {
    const path = '/databases';
    const body = { sql_mode };
    const url = `${path}/${database_cluster_id}/sql_mode`;
    return httpClient.put(url, body);
};
//# sourceMappingURL=configure-database-cluster-sql-modes.js.map

/***/ }),
/* 950 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=database-cluster-eviction-policy.js.map

/***/ }),
/* 951 */,
/* 952 */,
/* 953 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDropletsFromLoadBalancer = void 0;
exports.removeDropletsFromLoadBalancer = ({ httpClient, }) => ({ droplet_ids, id, load_balancer_id, }) => {
    const path = '/load_balancers';
    const body = {
        droplet_ids,
    };
    const url = `${path}/${load_balancer_id || id}/droplets`;
    return httpClient.delete(url, { data: body });
};
//# sourceMappingURL=remove-droplets-from-load-balancer.js.map

/***/ }),
/* 954 */,
/* 955 */,
/* 956 */,
/* 957 */,
/* 958 */,
/* 959 */,
/* 960 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(590);
var combineURLs = __webpack_require__(785);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),
/* 961 */,
/* 962 */,
/* 963 */,
/* 964 */,
/* 965 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(643), exports);
__exportStar(__webpack_require__(754), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */,
/* 970 */,
/* 971 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=tag-resource-details.js.map

/***/ }),
/* 972 */,
/* 973 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.purgeCache = void 0;
exports.purgeCache = ({ httpClient, }) => ({ cdn_endpoint_id, files, }) => {
    const path = '/cdn/endpoints';
    const body = { files };
    const url = `${path}/${cdn_endpoint_id}/cache`;
    return httpClient.delete(url, { data: body });
};
//# sourceMappingURL=purge-cache.js.map

/***/ }),
/* 974 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=tag-resource-payload.js.map

/***/ }),
/* 975 */,
/* 976 */,
/* 977 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLoadBalancer = void 0;
exports.deleteLoadBalancer = ({ httpClient, }) => ({ id, load_balancer_id, }) => {
    const path = '/load_balancers';
    const url = `${path}/${load_balancer_id || id}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-load-balancer.js.map

/***/ }),
/* 978 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(631), exports);
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(762), exports);
__exportStar(__webpack_require__(123), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 979 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoadBalancer = void 0;
exports.createLoadBalancer = ({ httpClient, }) => ({ algorithm, droplet_ids, enable_proxy_protocol, forwarding_rules, health_check, name, redirect_http_to_https, region, sticky_sessions, tag, vpc_uuid, }) => {
    const path = '/load_balancers';
    const body = {
        algorithm,
        droplet_ids,
        enable_proxy_protocol,
        forwarding_rules,
        health_check,
        name,
        redirect_http_to_https,
        region,
        sticky_sessions,
        tag,
        vpc_uuid,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=create-load-balancer.js.map

/***/ }),
/* 980 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(971), exports);
__exportStar(__webpack_require__(974), exports);
__exportStar(__webpack_require__(607), exports);
__exportStar(__webpack_require__(444), exports);
__exportStar(__webpack_require__(55), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 981 */,
/* 982 */,
/* 983 */,
/* 984 */,
/* 985 */,
/* 986 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.assignResourcesToProject = void 0;
exports.assignResourcesToProject = ({ httpClient, }) => ({ project_id, resources, }) => {
    const path = '/projects';
    const body = { resources };
    const url = `${path}/${project_id}/resources`;
    return httpClient.post(url, body);
};
//# sourceMappingURL=assign-resources-to-project.js.map

/***/ }),
/* 987 */,
/* 988 */,
/* 989 */,
/* 990 */,
/* 991 */,
/* 992 */,
/* 993 */,
/* 994 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTagsFromFirewall = void 0;
exports.removeTagsFromFirewall = ({ httpClient, }) => ({ firewall_id, tags, }) => {
    const path = '/firewalls';
    const body = { tags };
    const url = `${path}/${firewall_id}/tags`;
    return httpClient.delete(url, { data: body });
};
//# sourceMappingURL=remove-tags-from-firewall.js.map

/***/ }),
/* 995 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFirewall = void 0;
exports.deleteFirewall = ({ httpClient, }) => ({ firewall_id, }) => {
    const path = '/firewalls';
    const url = `${path}/${firewall_id}`;
    return httpClient.delete(url);
};
//# sourceMappingURL=delete-firewall.js.map

/***/ }),
/* 996 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=billing-history.js.map

/***/ }),
/* 997 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.listFirewalls = void 0;
exports.listFirewalls = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/firewalls';
    const queryParams = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: queryParams });
};
//# sourceMappingURL=list-firewalls.js.map

/***/ }),
/* 998 */,
/* 999 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getProject = void 0;
exports.getProject = ({ httpClient, }) => ({ project_id, }) => {
    const path = '/projects';
    const url = `${path}/${project_id}`;
    return httpClient.get(url);
};
//# sourceMappingURL=get-project.js.map

/***/ })
/******/ ]);