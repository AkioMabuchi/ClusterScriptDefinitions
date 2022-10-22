class Quaternion {
    w: number;
    x: number;
    y: number;
    z: number;

    constructor(w: number, x: number, y: number, z: number) {

    }

    clone = () => {
        return new Quaternion();
    }

    createEulerAngles = () => {
        return new Vector3();
    }

    dot = (v: Quaternion) => {
        return 0;
    }

    equals = (v: Quaternion) => {
        return true;
    }

    identity = () => {
        return new Quaternion();
    }

    invert = () => {
        return new Quaternion();
    }

    length = () => {
        return 0;
    }

    lengthSq = () => {
        return 0;
    }

    multiply = (v: Quaternion) => {
        return new Quaternion();
    }

    normalize = () => {
        return new Quaternion();
    }

    set = (w: number, x: number, y: number, z: number) => {
        return new Quaternion();
    }

    setFromAxisAngle = (axis: Vector3, degree: number) => {
        return new Quaternion();
    }

    setFromEulerAngles = (v: Vector3) => {
        return new Quaternion();
    }

    slerp = (v: Quaternion, a: number) => {
        return new Quaternion();
    }
}

class Vector2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
    }

    add = (v: Vector2) => {
        return new Vector2();
    }

    addScalar = (s: number) => {
        return new Vector2();
    }

    clone = () => {
        return new Vector2();
    }

    cross = (v: Vector2) => {
        return 0;
    }

    divide = (v: Vector2) => {
        return new Vector2();
    }

    divideScalar = (s: number) => {
        return new Vector2();
    }

    dot = () => {
        return 0;
    }

    equals = (v: Vector2) => {
        return true;
    }

    length = () => {
        return 0;
    }

    lengthSq = () => {
        return 0;
    }

    lerp = (v: Vector2, a: number) => {
        return new Vector2();
    }

    multiply = (v: Vector2) => {
        return new Vector2();
    }

    multiplyScalar = (s: number) => {
        return new Vector2();
    }

    negate = () => {
        return new Vector2();
    }

    normalize = () => {
        return new Vector2();
    }

    set = (x: number, y: number) => {
        return new Vector2();
    }

    sub = (v: Vector2) => {
        return new Vector2();
    }

    subScalar = (s: number) => {
        return new Vector2();
    }
}

class Vector3 {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
    }

    add = (v: Vector3) => {
        return new Vector3();
    }

    addScalar = (s: number) => {
        return new Vector3();
    }

    applyQuaternion = (q: Quaternion) => {
        return new Vector3();
    }

    clone = () => {
        return new Vector3();
    }

    cross = (v: Vector3) => {
        return new Vector3();
    }

    divide = (v: Vector3) => {
        return new Vector3();
    }

    divideScalar = (s: number) => {
        return new Vector3();
    }

    dot = (v: Vector3) => {
        return 0;
    }

    equals = (v: Vector3) => {
        return true
    }

    length = () => {
        return 0;
    }

    lengthSq = () => {
        return 0;
    }

    lerp = (v: Vector3, a: number) => {
        return new Vector3();
    }

    multiply = (v: Vector3) => {
        return new Vector3();
    }

    multiplyScalar = (a: number) => {
        return new Vector3();
    }

    negate = () => {
        return new Vector3();
    }

    normalize = () => {
        return new Vector3();
    }

    set = (x: number, y: number, z: number) => {
        return new Vector3();
    }

    sub = (v: Vector3) => {
        return new Vector3();
    }

    subScalar = (s: number) => {
        return new Vector3();
    }
}

class ClusterScript {
    private compatSendable: CompatSendable;
    state: StateProxy;

    getPosition = () => {
        return new Vector3();
    }

    getRotation = () => {
        return new Quaternion();
    }

    getStateCompat = (target: CompatGimmickTarget, key: string, parameterType: CompatParamType) => {
        return this.compatSendable;
    }

    log = (v: any) => {

    }

    onGrab = (callback: ((isGrab: boolean)=>void)) => {

    }

    onInteract = (callback: (()=>void)) => {

    }

    onRide = (callback: ((isGetOn: boolean)=>void)) => {

    }


    onUpdate = (callback: ((deltaTime: number)=>void)) => {

    }

    onUse = (callback: ((isDown: boolean)=>void)) => {

    }

    sendSignalCompat = (target: CompatStateTarget, key: string) => {

    }

    setPosition = (v: Vector3) => {

    }

    setRotation = (v: Quaternion) => {

    }

    setStateCompat = (target: CompatStateTarget, key: string, value: CompatSendable) => {

    }

    subNode = (subNodeName: string) => {
        return new SubNode();
    }
}

class SubNode {
    getPosition = () => {
        return new Vector3();
    }

    getRotation = () => {
        return new Quaternion();
    }

    setPosition = (v: Vector3) => {

    }

    setRotation = (v: Quaternion) => {

    }
}

type CompatGimmickTarget = "this" | "owner" | "global";
type CompatParamType = "signal" | "boolean" | "float" | "double" | "integer" | "vector2" | "vector3";
type CompatSendable = boolean | number | Vector2 | Vector3;
type CompatStateTarget = "this" | "owner";
type Sendable = boolean | number | string | Vector2 | Vector3 | Quaternion | null;
type StateProxy = { [propName: string]: Sendable };

const $ = new ClusterScript();