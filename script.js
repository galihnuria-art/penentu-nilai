
function cekNilai() {
    const input = document.getElementById("nilai").value;
    const hasil = document.getElementById("hasil");

    if (input === "" || Number(input) < 0 || Number(input) > 100) {
        hasil.innerHTML = "Masukkan nilai 0 sampai 100!";
        return;
    }

    const nilai = Number(input);
    let grade;
    let keterangan;

    if (nilai >= 90) {
        grade = "A";
        keterangan = "Sangat Baik";
    } else if (nilai >= 80) {
        grade = "B";
        keterangan = "Baik";
    } else if (nilai >= 70) {
        grade = "C";
        keterangan = "Cukup";
    } else {
        grade = "D";
        keterangan = "Perlu Belajar Lagi";
    }

    hasil.innerHTML =
        "Nilai: " + nilai +
        "<br>Grade: " + grade +
        "<br>Keterangan: " + keterangan;
}
