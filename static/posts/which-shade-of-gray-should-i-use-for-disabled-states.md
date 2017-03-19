The web is an accessibility nightmare. For many companies, A11Y guidelines are relegated to some "other" time or a "nice to have". But even when a website meets accessibility standards reasonably well, one of the components in design that seems to be left behind is the disabled state. And it's a somewhat reasonable thing to leave behind. After all, this is a *disabled* state. It's not intended to be interacted with, so it's reasonable to assume that because of this, accessibility can fall by the wayside.

But disabled buttons are buttons, too. And disabled text that is still visible on the screen exists to inform a user about the current state of the system. Often, disabled text is there to nudge a user towards another action that could perhaps *enable* the same text at some point in that context. Or it might exist to inform a user of options that may be unclear to him or her.

A great example of this is in faceted search. I'm on Amazon right now, and it's late in the evening. On the left hand side are my search options. Halfway down the page is a `Refine By` subheader and the very first filter option is for `Delivery Day`. No doubt this is because it is in Amazon's best interest to inform a user that `Get It Today` *is* a delivery option, and a damn good one, at that. But it's almost 10:00PM at night, and so the only option I have available to me as a user right now is `Get It Tomorrow`. Maybe I should hop online earlier in the day to take advantage of Amazon's great shipping options next time. But if I couldn't see both the disabled gray label and the disabled gray checkbox, the the shipping options aren't nearly as sweet.

Surprisingly, there isn't much talk out there about the `right` shade of gray for disabled. But here's what I do know:

### WCAG doesn't set contrast requirements for disabled text
> ** Incidental: Text or images of text that are part of an inactive user interface component,
> that are pure decoration, that are not visible to anyone,
> or that are part of a picture that contains significant other visual content, have no contrast requirement. **

##### [*From WCAG 2.0*](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Default, unstyled HTML button labels set to `disabled` are `#7F7F7F`. This is a `4:1` contrast ratio on a white background, just slightly off from minimum. This comes close to meeting the standard for low vision and moderately low visual acuity that tends to come with age. This is around 20/40 vision and tends to represent the acuity of a user around age 80 years old. This would be fine if the text was over 18pt or was 14 point bold.

Default, unstyled radio buttons set to `disabled` have borders of `#D8D8D8`. This is a 1.43:1 ratio, which is pretty terrible.

Disabled, checked checkboxes have the checkmark at `#A1A1A1`. This is a `2.58:1` ratio. Still bad, but getting better.


Pretty dismal as far as options go. Just because WCAG AA doesn't specify a minimum, doesn't mean we can't adopt some sensible best practices for disabled text:

### Best Practices

Leave disabled form elements at their default styles, even though they don't meet WCAG A.

But set the disabled label color to no darker than `#7F7F7F` to ensure that while the button isn't visible, the identifying label is still readable for most. This will serve as a clue for most users.

Disable any visual styling on hover or click for disabled buttons or text to prevent confusion

Consider some hint text, either in a tooltip or copy next to the disabled action instructing the user on why the action is disabled.

Keep the contrast on regular, active items high so that the difference between active items and disabled items is still distinguishable at a glance.


