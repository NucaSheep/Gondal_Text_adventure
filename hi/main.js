async function boot() {
    clear();
    await typer("Hello world");

    login();
}
async function main() {
    let command = await input();
    await parse(command);

    main();
}

