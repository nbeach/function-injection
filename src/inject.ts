export type InjectedFunction<F, S> = F & { source: S }

export interface Inject {
    // 1 Argument
    <T1, I1 extends T1, R>
    (func: (t1: T1) => R, i1: I1):
        InjectedFunction<() => R, (t1: T1) => R>

    // 2 Arguments
    <T1, I1 extends T1, T2, R>
    (func: (t1: T1, t2: T2) => R, i1: I1):
        InjectedFunction<(t2: T2) => R, (t1: T1, t2: T2) => R>

    <T1, I1 extends T1, T2, I2 extends T2, R>
    (func: (t1: T1, t2: T2) => R, i1: I1, i2: I2):
        InjectedFunction<() => R, (t1: T1, t2: T2) => R>


    // 3 Arguments
    <T1, I1 extends T1, T2, T3, R>
    (func: (t1: T1, t2: T2, t3: T3) => R, i1: I1):
        InjectedFunction<(t2: T2, t3: T3) => R, (t1: T1, t2: T2, t3: T3) => R>

    <T1, I1 extends T1, T2, I2 extends T2, T3, R>
    (func: (t1: T1, t2: T2, t3: T3) => R, i1: I1, i2: I2):
        InjectedFunction<(t3: T3) => R, (t1: T1, t2: T2, t3: T3) => R>

    <T1, I1 extends T1, T2, I2 extends T2, T3, I3 extends T3, R>
    (func: (t1: T1, t2: T2, t3: T3) => R, i1: I1, i2: I2, i3: I3):
        InjectedFunction<() => R, (t1: T1, t2: T2, t3: T3) => R>


    // 4 Arguments
    <T1, I1 extends T1, T2, T3, T4, R>
    (func: (t1: T1, t2: T2, t3: T3, t4: T4) => R, i1: I1):
        InjectedFunction<(t2: T2, t3: T3, t4: T4) => R, (t1: T1, t2: T2, t3: T3, t4: T4) => R>

    <T1, I1 extends T1, T2, I2 extends T2, T3, T4, R>
    (func: (t1: T1, t2: T2, t3: T3, t4: T4) => R, i1: I1, i2: I2):
        InjectedFunction<(t3: T3, t4: T4) => R, (t1: T1, t2: T2, t3: T3, t4: T4) => R>

    <T1, I1 extends T1, T2, I2 extends T2, T3, I3 extends T3, T4, R>
    (func: (t1: T1, t2: T2, t3: T3, t4: T4) => R, i1: I1, i2: I2, i3: I3):
        InjectedFunction<(t4: T4) => R, (t1: T1, t2: T2, t3: T3, t4: T4) => R>

    <T1, I1 extends T1, T2, I2 extends T2, T3, I3 extends T3, T4, I4 extends T4, R>
    (func: (t1: T1, t2: T2, t3: T3, t4: T4) => R, i1: I1, i2: I2, i3: I3, i4: I4):
        InjectedFunction<() => R, (t1: T1, t2: T2, t3: T3, t4: T4) => R>


    // 5 Arguments
    <T1, I1 extends T1, T2, T3, T4, T5, R>
    (func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, i1: I1):
        InjectedFunction<(t2: T2, t3: T3, t4: T4, t5: T5) => R, (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>

    <T1, I1 extends T1, T2, I2 extends T2, T3, T4, T5, R>
    (func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, i1: I1, i2: I2):
        InjectedFunction<(t3: T3, t4: T4, t5: T5) => R, (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>

    <T1, I1 extends T1, T2, I2 extends T2, T3, I3 extends T3, T4, T5, R>
    (func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, i1: I1, i2: I2, i3: I3):
        InjectedFunction<(t4: T4, t5: T5) => R, (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>

    <T1, I1 extends T1, T2, I2 extends T2, T3, I3 extends T3, T4, I4 extends T4, T5, R>
    (func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, i1: I1, i2: I2, i3: I3, i4: I4):
        InjectedFunction<(t5: T5) => R, (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>

    <T1, I1 extends T1, T2, I2 extends T2, T3, I3 extends T3, T4, I4 extends T4, T5, I5 extends T5, R>
    (func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, i1: I1, i2: I2, i3: I3, i4: I4, i5: I5):
        InjectedFunction<() => R, (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>

    (func: (method: any, ...injections: any[]) => any): (...args: any[]) => any
}

export const inject: Inject = ((method: any, ...injections: any[]) => {
    const injected: any = (...args: any[]) => method(...injections, ...args)
    injected.source = method
    return injected
}) as (...args: any[]) => any


