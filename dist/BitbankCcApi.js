"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const apiTypes_1 = require("./apiTypes");
const util = require("./util");
const crypto = require("crypto");
const errorMap_1 = require("./errorMap");
const querystring = require("querystring");
const events_1 = require("events");
const _ = require("lodash");
// to avoid a known issue with axios + nock.  https://github.com/axios/axios/issues/305
axios_1.default.defaults.adapter = require('axios/lib/adapters/http');
class BitbankCcApi extends events_1.EventEmitter {
    constructor(key, secret, timeout = 5000) {
        super();
        this.key = key;
        this.secret = secret;
        this.timeout = timeout;
        this.publicApiBaseUrl = 'https://public.bitbank.cc';
        this.privateApiBaseUrl = 'https://api.bitbank.cc';
        this.publicApiAxios = axios_1.default.create({ baseURL: this.publicApiBaseUrl, timeout: this.timeout });
        this.privateApiAxios = axios_1.default.create({ baseURL: this.privateApiBaseUrl, timeout: this.timeout });
    }
    getTicker(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/${request.pair}/ticker`;
            return new apiTypes_1.TickerResponse(yield this.getPublic(path));
        });
    }
    getDepth(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/${request.pair}/depth`;
            return new apiTypes_1.DepthResponse(yield this.getPublic(path));
        });
    }
    getTransactions(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = `/${request.pair}/transactions`;
            if (request.date !== undefined) {
                path += `/${request.date}`;
            }
            return new apiTypes_1.TransactionsResponse(yield this.getPublic(path));
        });
    }
    getCandlestick(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/${request.pair}/candlestick/${request.candleType}/${request.date}`;
            return new apiTypes_1.CandlestickResponse(yield this.getPublic(path));
        });
    }
    getAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v1/user/assets`;
            return new apiTypes_1.AssetsResponse(yield this.get(path, {}));
        });
    }
    sendOrder(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v1/user/spot/order`;
            return new apiTypes_1.SendOrderResponse(yield this.post(path, request));
        });
    }
    getOrder(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v1/user/spot/order`;
            return new apiTypes_1.GetOrderResponse(yield this.get(path, request));
        });
    }
    cancelOrder(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v1/user/spot/cancel_order`;
            return new apiTypes_1.CancelOrderResponse(yield this.post(path, request));
        });
    }
    cancelOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v1/user/spot/cancel_orders`;
            return new apiTypes_1.CancelOrdersResponse(yield this.post(path, request));
        });
    }
    getOrdersInfo(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v1/user/spot/orders_info`;
            return new apiTypes_1.OrdersInfoResponse(yield this.post(path, request));
        });
    }
    getActiveOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v1/user/spot/active_orders`;
            return new apiTypes_1.ActiveOrdersResponse(yield this.get(path, request));
        });
    }
    getTradeHistory(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v1/user/spot/trade_history`;
            return new apiTypes_1.TradeHistoryResponse(yield this.get(path, request));
        });
    }
    getWithdrawalAccount(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v1/user/withdrawal_account`;
            return new apiTypes_1.WithdrawalAccountResponse(yield this.get(path, request));
        });
    }
    requestWithdrawal(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/v1/user/request_withdrawal`;
            return new apiTypes_1.RequestWithdrawalResponse(yield this.post(path, request));
        });
    }
    privateApiCall(method, path, request) {
        return __awaiter(this, void 0, void 0, function* () {
            let axiosConfig;
            switch (method) {
                case 'GET':
                    axiosConfig = this.createGetConfig(path, request);
                    break;
                case 'POST':
                    axiosConfig = this.createPostConfig(path, request);
                    break;
                default:
                    throw new Error(`Unknown method ${method}.`);
            }
            const requestSummary = { url: `${this.privateApiAxios.defaults.baseURL}${axiosConfig.url}`, method, headers: axiosConfig };
            this.emit('private_request', requestSummary);
            const axiosResponse = yield this.privateApiAxios.request(axiosConfig);
            const response = axiosResponse.data;
            this.emit('private_response', response, requestSummary);
            this.checkError(response);
            return response.data;
        });
    }
    post(path, request) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.privateApiCall('POST', path, request);
        });
    }
    get(path, request) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.privateApiCall('GET', path, request);
        });
    }
    getPublic(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.privateApiAxios.defaults.baseURL}${path}`;
            this.emit('public_request', url);
            const axiosResponse = yield this.publicApiAxios.get(path);
            const response = axiosResponse.data;
            this.emit('public_response', response, url);
            this.checkError(response);
            return response.data;
        });
    }
    checkError(response) {
        if (response.success === 0) {
            const errorMessage = errorMap_1.errorMap[String(response.data.code)];
            throw new Error(`${response.data.code} ${errorMessage}`);
        }
    }
    createPostConfig(path, request) {
        const nonce = util.nonce();
        const body = JSON.stringify(request);
        const payload = new Buffer(nonce + body);
        const signature = crypto
            .createHmac('sha256', this.secret)
            .update(payload)
            .digest('hex');
        return {
            url: path,
            method: 'post',
            data: body,
            headers: {
                'ACCESS-KEY': this.key,
                'ACCESS-NONCE': nonce,
                'ACCESS-SIGNATURE': signature
            }
        };
    }
    createGetConfig(path, request) {
        const nonce = util.nonce();
        const qs = querystring.stringify(request);
        const pathWithQs = _.isEmpty(qs) ? path : `${path}?${qs}`;
        const payload = new Buffer(nonce + pathWithQs);
        const signature = crypto
            .createHmac('sha256', this.secret)
            .update(payload)
            .digest('hex');
        return {
            url: pathWithQs,
            method: 'get',
            headers: {
                'ACCESS-KEY': this.key,
                'ACCESS-NONCE': nonce,
                'ACCESS-SIGNATURE': signature
            }
        };
    }
}
exports.default = BitbankCcApi;
