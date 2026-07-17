async function probarConexion() {
    const { data, error } = await supabaseClient
        .from("usuarios")
        .select("*");

    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Usuarios:");
        console.table(data);
    }
}

probarConexion();