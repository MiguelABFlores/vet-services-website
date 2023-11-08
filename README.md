# vet-services-website

## URL of development version

[Servicios Veterinarios Eläine](https://svelain-cloudrun-dev-y7olqgb2fa-wl.a.run.app)

To bundle for development

```sh
npm run dev
```

To bundle the project for release

```sh
npm run build
```

To run tests

```sh
npm run test
```

## Format and Validate
We will be using different tools to format the code and verify its validity accross the lines:
- [HTML Validator](https://validator.w3.org/)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Label Groups
We group labels by color, according to broad themes. 

### Platform
If the repository covers multiple parts, this is how we designate where the issue lives. (i.e. iOS and Android for cross-platform tablet app).

### Priority
We designate immediacy, the assignments that you designate as the most important in your workflow.

### Effort
Relative effort involved in the task at hand, fibonacci from 1 to 13.

### Problems
Issues that make the product feel broken. High priority, especially if its present in production.

### Mindless
Converting measurements, reorganizing folder structure, and other necessary (but less impactful) tasks.

### Experience
Affect user’s comprehension, or overall enjoyment of the product. These can be both opportunities and “UX bugs”.

### Environment
Server environment. With good QA, you’ll identify issues on test and staging deployments.

### Feedback
Requires further conversation to figure out the action steps. Most feature ideas start here.

### Improvements
Iterations on existing features or infrastructure. Generally these update speed, or improve the quality of results. Adding a new “Owner” field to an existing “Calendar” model in the API, for example.

### Additions
Brand new functionality. New pages, workflows, endpoints, etc.

### Pending
Taking action, but need a few things to happen first. A feature that needs dependencies merged, or a bug that needs further data.

### Inactive
No action needed or possible. The issue is either fixed, addressed better by other issues, or just out of product scope.
