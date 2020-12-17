# Analytics

The purpose of this project is to create a simple analytics tool that don't require cookies or localStorage to get page visualization data.

Without the use of those tools, we can't track the user.

We get the information from the request, this information can include:

- URL from the requisition;
- IP;
- Idiom.

We could use the IP to get the information from which country the requisition come, this is not the currently focus on this project.

# Tools

- [Deno](https://deno.land);
- [Oak](https://oakserver.github.io/oak/).