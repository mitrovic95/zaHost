package dm.pozoristePromena.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dm.pozoristePromena.dto.OsobaDTO;
import dm.pozoristePromena.model.Osoba;
import dm.pozoristePromena.service.OsobaService;

@RestController
@RequestMapping("/api/osoba")
public class OsobaController {

	 @Autowired
	 AuthenticationManager authenticationManager;

	@Autowired
	private OsobaService osobaService;

//	 @PreAuthorize("isAuthenticated()")
	@GetMapping
	public ResponseEntity<List<OsobaDTO>> getOsobaPage() {
		final List<OsobaDTO> retVal = osobaService.findAll().stream().map(OsobaDTO::new).collect(Collectors.toList());

		return new ResponseEntity<>(retVal, HttpStatus.OK);
	}
	

//	 @PreAuthorize("isAuthenticated()")
	@GetMapping("/{id}")
	public ResponseEntity<OsobaDTO> getOsoba(@PathVariable Long id) {
		final Osoba osoba = osobaService.findOne(id);

		if (osoba == null) {
			return new ResponseEntity<OsobaDTO>(HttpStatus.NOT_FOUND);
		}

		final OsobaDTO osobaDTO = new OsobaDTO(osoba);
		return new ResponseEntity<>(osobaDTO, HttpStatus.OK);
	}

	 @PreAuthorize("hasAnyAuthority('ADMIN')")
	@PostMapping
	public ResponseEntity<String> createNewOsoba(@RequestBody Osoba osoba) {
		final Optional<Osoba> checkOsoba = osobaService.findById(osoba.getId());
		if (checkOsoba.isPresent()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} else if (osoba.getId() == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		osobaService.save(osoba);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	 @PreAuthorize("hasAnyAuthority('ADMIN')")
	@PutMapping("/{id}")
	public ResponseEntity<String> updateOsoba(@PathVariable Long id, @RequestBody Osoba osoba) {
		final Osoba foundOsoba = osobaService.findOne(id);
		if (foundOsoba == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		foundOsoba.setIme(osoba.getIme());
		foundOsoba.setPrezime(osoba.getPrezime());
		foundOsoba.setSlika1(osoba.getSlika1());
		foundOsoba.setSlika2(osoba.getSlika2());
		foundOsoba.setOpis(osoba.getOpis());
		foundOsoba.setPrioritet(osoba.getPrioritet());
		foundOsoba.setBrojTelefona(osoba.getBrojTelefona());
		foundOsoba.setMejl(osoba.getMejl());
		osobaService.save(foundOsoba);
		return new ResponseEntity<>(HttpStatus.OK);

	}

	 @PreAuthorize("hasAnyAuthority('ADMIN')")
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteOsoba(@PathVariable Long id) {
		final Osoba foundOsoba = osobaService.findOne(id);
		if (foundOsoba == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		osobaService.remove(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}