export const dataBlog2 = {
  1: {
    title: "How to Contribute to HyperUI",
    arr: [
      {
        name: "subtitle",
        place: "Spotted a Bug?",
      },
      {
        name: "summary",
        place: `If you find something that doesn't seem right, such as:

-> Spelling
-> Accessibility
-> SEO

Or anything else, please create an issue.

Once an issue is created, we can begin discussing a solution and approach to resolving the issue.`,
      },
      {
        name: "subtitle",
        place: "Want to Add Something?",
      },
      {
        name: "summary",
        place: `If you have something to add to HyperUI, that's great! But before you dive in, 
        I suggest you create an issue so we can discuss what you want to add.

        If you're planning to add a new component, include some examples of how the 
        component will look.`,
      },
      {
        name: "subtitle2",
        place: "Pull Request Feedback",
      },
      {
        name: "summary2",
        place: `All pull requests must be reviewed before being merged into HyperUI, which means there might be feedback at times.`,
      },
      {
        name: "subtitle2",
        place: "Creating a New Component",
      },
      {
        name: "summary2",
        place: `For this example, we will create a new footer component in the marketing category.

1.Create a new file in /public/components/marketing-footers
2.Add the new component to the components group in 
/src/data/components/marketing-footers.mdx`,
      },
      {
        name: "subtitle2",
        place: "New Component Feedback",
      },
      {
        name: "summary2",
        place: `If you plan to add a component to HyperUI, I will provide feedback on both the design and development of the component.

For new component pull requests, I will review the work three times. If feedback from the first review remains unaddressed by the third review, I will close the PR. If there is new feedback on the third review, it's not an issue.`,
      },
    ],
  },
  2: {
    title: `How to Add Animation Duration, 
    Delay and Easing Support to Tailwind CSS (v3)`,
    arr: [
      {
        name: "subtitle",
        place: "Adding Animation Duration Classes to Tailwind CSS",
      },
      {
        name: "summary",
        place: `This will add the duration classes used for transitions to animations with the animate- prefix:

->animate-duration-0
->animate-duration-75
->animate-duration-100
->animate-duration-150
->animate-duration-200
->animate-duration-300
->animate-duration-500
->animate-duration-700
->animate-duration-1000`,
      },
      {
        name: "subtitle",
        place: "Adding Animation Delay Classes to Tailwind CSS",
      },
      {
        name: "summary",
        place: `This will add the delay classes used for transitions to animations with the animate- prefix:

->animate-delay-0
->animate-delay-75
->animate-delay-100
->animate-delay-150
->animate-delay-200
->animate-delay-300
->animate-delay-500
->animate-delay-700
->animate-delay-1000`,
      },
      {
        name: "subtitle",
        place: "Adding Animation Easing Classes to Tailwind CSS",
      },
      {
        name: "summary",
        place: `This will add the ease classes used for transitions to animations with the animate- prefix:

->animate-ease
->animate-ease-linear
->animate-ease-in
->animate-ease-out
->animate-ease-in-out`,
      },
    ],
  },
  3: {
    title: "One Simple Trick to Cleaning Up Tailwind CSS Code (v3)",
    arr: [
      {
        name: "summary",
        place: `Tailwind CSS can make your markup messy. However, we can prevent this by delegating classes to the parent element.

Let's take the following example.
<ul>
  <li class="text-sm font-medium text-gray-900">...</li>
  <li class="text-sm font-medium text-gray-900">...</li>
  <li class="bg-gray-100 text-sm font-medium text-gray-900">...</li>
</ul>

We have three repeating classes on the <li> elements.

->text-sm
->font-medium
->text-gray-900

We can clean this up by moving these classes to the parent <ul> element and letting the CSS cascade down.

<ul class="text-sm font-medium text-gray-900">
  <li>...</li>
  <li>...</li>
  <li class="bg-gray-100">...</li>
</ul>

But what if we are using classes that cannot be delegated to the parent? Classes like whitespace-nowrap, px-8, rotate-3 and many more cannot be applied to child elements through cascading. Thankfully, there's a solution..`,
      },
    ],
  },
  4: {
    title: `How to Create an Animated Border Gradient with Tailwind CSS (v3)`,
    arr: [
      {
        name: "subtitle",
        place: "Faking the Border",
      },
      {
        name: "summary",
        place: `First, we need our interactive element. For this example, I'll use an <a> tag. We create an illusion of a border by using a background color and padding.

<a href="#" class="inline-block bg-white p-0.5">
  <span class="block bg-gray-900 px-5 py-3 text-white"> Get Started </span>
</a>

Inside this, we add a <span> element that contains the text content of the element, along with the desired padding for our button or link.`,
      },
      {
        name: "subtitle",
        place: "Adding the Gradient",
      },
      {
        name: "summary",
        place: `Next, we add the gradient.

I'll use a pre-made Tailwind CSS gradient from Hypercolor.

We apply the gradient to the interactive element with the faux border.

<a href="#" class="inline-block bg-white from-pink-500 via-red-500 to-yellow-500 p-0.5">
  <span class="block bg-gray-900 px-5 py-3 text-white"> Get Started </span>
</a>

You might worry that the gradient classes added will overwrite the bg-white, but it won't. For that to happen, we need to add the gradient direction class, which is done on hover.`,
      },
      {
        name: "subtitle",
        place: "Applying the Hover Effect",
      },
      {
        name: "summary",
        place: `We can enhance what we've done by adding two more classes: one is a default Tailwind CSS class applied on hover, and the other is always applied, requiring some JIT (Just-In-Time) magic.

<a
  href="#"
  class="inline-block bg-white from-pink-500 via-red-500 to-yellow-500 bg-[length:_400%_400%] p-0.5 hover:bg-gradient-to-r"
>
  <span class="block bg-gray-900 px-5 py-3 text-white"> Get Started </span>
</a>
Let's break these down.

hover:bg-gradient-to-r

This applies the gradient direction class only on hover, which will display the gradient instead of bg-white.

bg-[length:400%_400%]

This enlarges the gradient, enabling us to animate it. Without this class, the gradient will appear static and won't animate.`,
      },
      {
        name: "subtitle",
        place: "Animating the Gradient",
      },
      {
        name: "summary",
        place: `Now, let's animate.

First, we need to make some additions to our Tailwind CSS config.

theme: {
  extend: {
    animation: {
      border: 'background ease infinite',
    },
    keyframes: {
      background: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
    },
  },
}

Here, we're creating an animation with the class animate-background using the background keyframes. This moves the gradient.

Finally, we add the animate-background class to the interactive element with the gradient classes.

You can use hover:animate-background if preferred, but note that the animation will reset when you're no longer hovering, which can cause it to look a bit jumpy.

The full example looks like this.

<a
  href="#"
  class="animate-background inline-block bg-white from-pink-500 via-red-500 to-yellow-500 bg-[length:_400%_400%] p-0.5 [animation-duration:_6s] hover:bg-gradient-to-r"
>
  <span class="block bg-gray-900 px-5 py-3 text-white"> Get Started </span>
</a>
We're using the arbitrary properties syntax to write [animation-duration:_6s] so we can alter the animation-duration for each use of the effect.

Here's how it looks. I've added some extra classes to enhance the <a>.`,
      },
    ],
  },
  5: {
    title: "How to Write Better Containers in Tailwind CSS (v3)",
    arr: [
      {
        name: "summary",
        place: `You might be wondering...

Why not use the .container class?

Great question.

Let's examine the .container class documentation on the Tailwind CSS website.

It provides max-width sizes at different breakpoints, which results in the content within the container adjusting to that size as the breakpoint is reached.

Container Example

If you shrink or expand the preview, you will see the content within the container snapping.`,
      },
      {
        name: "subtitle",
        place: `A More Fluid Container`,
      },
      {
        name: "summary",
        place: `Here's the same preview, but using the classes I mentioned at the start of this blog post.

Fluid Example

As you can see, it's more fluid. You reach the breakpoint where max-w-screen-xl is no longer applied, and then the padding is used to contain the content. To create a fully fluid container, you can remove the max-w-screen-xl class.

Let's compare the two.

Container vs Fluid Example

One argument for the .container approach is that the content is wider on larger screens. However, to address this, you can use max-w-screen-2xl instead of max-w-screen-xl.`,
      },
      {
        name: "subtitle",
        place: "Edit the Config and Write Less Code",
      },
      {
        name: "summary",
        place: `One final note: if you are using the .container approach and find yourself writing container mx-auto often, you can do the following.

theme: {
  container: {
    center: true,

    // Optional
    padding: {
      DEFAULT: '1rem',
      sm: '1.5rem',
      lg: '2rem'
    }
  },
}`,
      },
    ],
  },
};