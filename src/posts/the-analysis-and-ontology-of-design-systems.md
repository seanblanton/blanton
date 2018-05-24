---
title: The Analysis and Ontology of Design Systems
date: 2018-03-11
private: true
---

The following passages will attempt to define design systems and their relationships.

I hesitate to refer to this as a theory, despite it being a common way these types of things get referred to conversationally. While theory has been transmuted over time, I still opine that theories need to be tested, proven, and widely accepted as true. The following builds on the work of others that have come before me but is more like a kind of framework or position. It’s yet to be proven whether or not this framework supports the needs of an evolving and expanding ecosystem of platforms and media. I’ve done my best to allow this work to be applicable in any content or platform without being prescriptive in its application.

## Design systems are not visual

The noun “design system” itself comes with a whole lot of baggage — and unfortunately most of that baggage involves the perception of a design system as a collection of drawn stuff your design team made. As designers, engineers, and product managers alike all know is that the Design Artifact (DA) is only the tip of the iceberg and tends to be one of the last decisions made in the product development cycle, long after all the other work has been done to determine just exactly what the DA needs to be in the first place.

Example: One need not draw any kind of dropdown selector until the fact has already been established that a user needs to be able to make a selection in the first place and that the selection can be one (or sometimes n) number of possible options, that a selector is the most appropriate way in which to present this information, that the selector is something appropriate for this context, that the users of this product know and understand what a selector is and how to use it, ad almost infinitum.

And even after selector is the proposed DA for this design problem, we need a rigorous way in which to describe that entity that doesn’t leave out or misrepresent horribly some situation that we hadn’t accounted for, or some new platform of media that sends the entire Jenga tower crashing and tumbling down in some awful mess and we’re sitting there around a conference room table recoiled in terror wondering if we’d even ever designed anything at all.

The fact of the matter is that design systems aren’t visual in the first place — it’s just that that’s one of the easiest ways for someone to latch on to what a design system is for. Design systems are an abstract way to talk about the real things we make in the world. In this way, they function more like mathematical entities than physical objects. DS investigates the conceptions of and relationships between entities which comprise designed artifacts.

Let’s go through an example of how design systems are like mathematics. Take the number $$3$$. How does one define the number $$3$$? Most of us would point to an instance of $$3$$ of something: three books on the table; three fingers held up. But this kind of definition doesn’t tell us anything about the relationship between three as a count of books on the table and, say, the relationship between three angles in a triangle, or the square root of 3 much less. We’ll need a definition of $$3$$ that isn’t bound by any thing before we can even begin to discuss what three can do without clutching our heads in frustration. The same is true for entities in a design system. For us to have any kind of rigorous account of what that system is to keep the Jenga tower standing tall, we need to separate from it any kind of specific implementation or application. To wit: What is the ontological status of a design system?

[[ define intro to fundamental forces… how to build up the particle set and put back together ]]

## Fundamental Forces of Design Systems

Before we get into describing design system structure and interactions, it’s important to be apprised that there’s a whole slew of things that can influence the types of inputs we pass to any design system structure. We can stack these forces together and use them to evaluate our design system for any given situation.

Let’s take typography as an example: say we’d like to determine an appropriate set of type sizes for our design system. Those type sizes can be represented as a finite set of numbers T. To determine what set of sizes might be appropriate, we can consider the following:

* The context in which a user experiences the design system (web or mobile, for instance) may give us insight into our initial value for $$f\_{0}$$ or the total number of values $$n$$ the system needs to support
* Internationalization may give information about a preferred minimum font size needed to render content with non-Western characters
* Brand may give insight into how subtle or extreme the ratio $$r$$ between each value in the set is or the initial size to base the system off of
* The returned value may be further adjusted given more context like user settings or environment

$$baseValue = f*{0} = f + brand + context$$
$$minimumSize = m = m + brand + internationalization$$
$$maximumSize = lim*{m \to \infty} = M + brand + context$$
$$length = n + context$$
$$ratio = r = 1 \* brand$$

$$T = \forall f \in \{...,f*{0},...\} f*{0}r^\tfrac{f}{M} \* context$$

> ☝ This notation is probably wildly off… better triple check this before ever posting

The influence of these fundamental forces can be as small as determining font size and as large as determining which features to enable in a certain locale or on a certain device. A non-exhaustive list of possible fundamental forces includes:

| External Standards   | W3C, WCAG, and other best practice consortiums who promote interoperability on the web                                |
| -------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Context              | External factors the system has no control over. e.g. Brightness, time, user activity, user settings, impairment, etc |
| Research             | The results of user testing, competitor research, A/B testing, etc                                                    |
| Internationalization | Translations, cultural alternatives, RTL layouts, etc                                                                 |
| Brand                | Brand values, voice, position, target audience, etc which may anchor design decisions                                 |

## Parts of a Design System

Context (Context Functions)
Contexts are external factors outside the design system that the system has no control over. When context comes into a design system, the system needs to adapt to fit that context. Because of this, every element of a design system is a function of $$N$$ contexts, each represented as

$$C(x) = context(particle)$$

#### Force

To have force is to to an effect on the output of an aspect of the design system. Design systems are affected by fundamental forces (described above)

#### Particles

Particles are sets containing a single entity. They are informed by fundamental forces but are themselves immutable parts of the design system. Particles are typed and are agnostic of any implementation. The known types are: `number`, `string`, `boolean`, and `function`

#### Equivalent Particle Subsets

Particle sets are the subset of all particles which, given particles $$a, b$$, and context $$C$$, are equivalent. Particle sets may be of different types, e.g. a numeral and a string, but still return the same value under the same context. E.g. color transformations.

`C(a) == C(b)`

```javascript
// context.platform = 'ios'
C(val) = toIosColor(val);
C('#FFF') === C(rgb(255, 255, 255)) // TRUE
```

#### Particle Arrays

Particle arrays are subsets of particles which all have the same type and are interchangeable. They are context agnostic and provide the foundation for variance. Particle arrays may get their values from an Equivalent Particle Subset via some Context function.

Example
`TypeSizes = [10, 12, 14, 16, 20, 24, 32;]`
`Color = [r, g, b, a]`

#### Atoms

An atom a set $$1+N$$ particles whose values are equal to the properties required to define a single property of a given context. These vary across platforms and are transformed by Context functions

```javascript
width
height
backgroundColor
```

#### Elements

Elements are the set of particles which combine to equal the minimum specification required to produce a standard tag or component in a native context.

```javascript
<button />
<div />
<NSView />
```

#### Objects

Objects are instances of elements

## Interactions of Subatomic Design Particles

Not all particles are affected by context equally. For instance, particles, particle arrays, or particle sets which have no data properties will not interact with some content strategy contexts. Likewise, data particles will not react with context related to brand colors because the data does not in itself have any visual properties. In these instances, only the composition of these particles can result in a set which is affected by this context.

Context must be evaluated at multiple levels of composition to determine any if any force has been exerted on that entity.

[[ define properties and how they differ from particles ]]

[[ define element functions ]]

Fundamental Interactions and Rules of Design Systems Particles
Everything in the design system is a composition
All compositions are sets
All sets are immutable
Context functions return new sets from existing ones
Particles must be independent
Elements are definitions of objects
Particles can have no properties beyond a name

[[ tbd ]]

#### Disclosure: I am not a mathematician, philosopher, physicist, biologist, architect, or any other profession whose ideas I have drawn on as metaphor on in order to unpack the problems and possible solutions of design systems.
