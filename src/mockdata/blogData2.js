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
    title: "Pixelated Image Lazy Loading with Tailwind CSS (v3)",
    arr: [
      {
        name: "summary",
        place: `A few years ago, I was tasked with building a pixelated image lazy loader, which I thought would be a significant challenge. However, the solution turned out to be relatively straightforward.

Set the image src to a tiny version of the image.
Apply the CSS image-rendering: pixelated to the image.
Implement your lazy loading logic.
Once loaded, replace the image src and switch the CSS to image-rendering: auto.
To illustrate this effect, here's a CodePen I made a few years ago - Pixelated Lazy Loading.

But how does this translate to Tailwind CSS? The process is exactly the same.`,
      },
    ],
  },
};