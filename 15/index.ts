/*

Intro:

    Our attempt to Open Source didn't work quite as
    expected. It turned out there were already many
    existing functional JS libraries.

    All the remaining developers left the company as
    well. It seems that they are joining a very
    ambitious startup which re-invented a juicer and
    raised millions of dollars.
    Too bad we cannot compete with this kind of
    financing even though we believe our idea is
    great.

    It's time to shine for the last time and publish
    our new invention: object-constructor as our CTO
    named it. A small library which helps
    manipulating an object.

Exercise:

    Here is a library which helps manipulating objects.
    We tried to write type annotations and we failed.
    Please help!

*/

type ObjectType<A, B extends string, C> = A & {[Prop in B]: C};

export class ObjectManipulator<A> {

    constructor(protected obj: A) {}

    public set<B extends string, C>(key: B, value: C): ObjectManipulator<ObjectType<A, B, C>> {
        return new ObjectManipulator({...this.obj, [key]: value} as ObjectType<A, B, C>);
    }

    public get<B extends keyof A>(key: B): A[B] {
        return this.obj[key];
    }

    public delete<B extends keyof A>(key: B): ObjectManipulator<Omit<A, B>> {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): A {
        return this.obj;
    }
}
