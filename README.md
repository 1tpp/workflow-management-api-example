# Workflow management api design

This can form the basis of all sorts of solutions - including workflow management tools, approval apps, automated solutions - and a whole raft of other internal tools.

In fact, most management or administrative tasks can be expressed as chains of requests and decisions. Someone requests something - like permission to take an action or access a resource - and someone approves or declines this request - based on defined logic.

## What is a workflow management database?
A workflow management database is where we store information that represents the status of a process at any point in time - along with how it has progressed up that point and how it can move onwards.

This matches what’s known in computer science as a finite-state machine.

Basically, this is a model that outlines how resources can be in one of a finite number of states at any given time. Certain actions can be performed on the resource, in order for it to transition to another state.

What does this have to do with workflow management?

A workflow is a repeatable set of decisions that determine what happens to a request. This includes the decisions themselves, when they occur, and who is responsible for making them.

The goal is to progress the request from start to finish based on established business rules.

This could be a specific task like employee onboarding, dealing with purchase orders, approval workflows, editorial flows for video tutorials, or any other business processes. Effective workflow database design is crucial for all sorts of applications.

For example, the process for submitting a bug in an internal software system could look like this:

1. Any user can record a bug, with an initial status of submitted.
2. The service desk checks if the report follows a determined template. Any that don’t are marked as declined.
3. If the request is in the right form, it’s assigned to an appropriate member of the development team and marked as pending.
4. Once the development team starts work, the status changes to in-progress.
5. When they’re finished, the status changes to resolved.
6. The original user is notified of the outcome.
As you can see, the workflow is represented by how the status of the resource changes as it passes through different actions. As we said earlier, the transitions and actions are what must happen for the resource to move from one status to the next.


## How does this work?
So, before we dive into designing a workflow management database, let’s think about how this works in the abstract.

The method we’re going to use today is based on a relational data model. This means we’ll have several different tables, each one representing a single type of data entity. We’ll then link these tables using defined relationships.

What specific data do we need to represent for our workflow management database design to be viable?

The most basic model will need to include data objects to represent:

Requests - that can be reviewed, approved, or implemented by different actors.
Processes - which govern how each request should be handled.
Request information - variable data that can be associated with each request.
States - the stats that individual requests can be in.
Transitions and actions - the flow of states that users can progress requests through within a process, along with how this is controlled.
Users - the people involved in the workflow.
Of course, the nomenclature that we’re using here isn’t critical. You could just as easily use your own naming conventions for different data entities.

The goal is that we can use the same database for multiple similar workflows, as the basis for a variety of internal tools or other technical solutions. Therefore, we need to consider how we can create a data model that’s applicable to the widest number of internal processes.

Obviously, we’ll need to know what our underlying business logic is before we can codify it in a formal database to support our approval processes.